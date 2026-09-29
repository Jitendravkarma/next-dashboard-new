
import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

// Keep your existing const pool block here, unchanged.
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "form_pack_user",
  password: "]wgW+Nu~Pplg",
  database: "form_pack_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const runtime = "nodejs";

const MSG91_URL = "https://api.msg91.com/api/v5/otp";
const MAX_REQUESTS = 2;

function getUserIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const ip = forwarded.split(",")[0].trim();
    if (ip) return ip;
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "unknown";
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      customer_name,
      customer_mobile,
      customer_city,
      country_name,
      country_code,
      otp,
      resend = false,
    } = body;

    // Validate input
    const mobile = String(customer_mobile || "").replace(/\D/g, "");
    const code = String(country_code || "").replace(/\D/g, "");

    if (!mobile || !code || mobile.length > 15 || code.length > 4) {
      return NextResponse.json(
        { status: false, message: "Valid mobile number and country code are required" },
        { status: 400 }
      );
    }

    if (typeof resend !== "boolean") {
      return NextResponse.json(
        { status: false, message: "Invalid resend value" },
        { status: 400 }
      );
    }

    if (!resend && !/^\d{4,8}$/.test(String(otp || ""))) {
      return NextResponse.json(
        { status: false, message: "A valid OTP is required" },
        { status: 400 }
      );
    }

    const authkey = "269369AIilt1Kc05c9a1be5";
    const template_id = "6799d7c2d6fc0540b5739de3";

    if (!authkey || !template_id) {
      return NextResponse.json(
        { status: false, message: "MSG91 configuration is missing" },
        { status: 500 }
      );
    }

    const userIp = getUserIp(request);

    if (userIp === "unknown") {
      console.warn("Client IP unavailable; check your proxy configuration.");
    }

    // Find customer
    const [customerRows] = await pool.execute(
      `SELECT mobile_no, mobile_verified
       FROM customer_details
       WHERE mobile_no = ?
       LIMIT 1`,
      [mobile]
    );

    const customer = customerRows[0];

    if (customer && String(customer.mobile_verified) === "1") {
      return NextResponse.json({
        status: false,
        message: "This number is already verified",
      });
    }

    if (resend && !customer) {
      return NextResponse.json(
        { status: false, message: "Please request an OTP first" },
        { status: 404 }
      );
    }

    // Atomically count OTP attempts per IP.
    // The counter resets after one hour.
    const [limitResult] = await pool.execute(
      `INSERT INTO otp_ip_limits
         (ip_address, request_count, window_started_at)
       VALUES (?, 1, NOW())
       ON DUPLICATE KEY UPDATE
         request_count = IF(
           window_started_at <= DATE_SUB(NOW(), INTERVAL 1 HOUR),
           1,
           LEAST(request_count + 1, 3)
         ),
         window_started_at = IF(
           window_started_at <= DATE_SUB(NOW(), INTERVAL 1 HOUR),
           NOW(),
           window_started_at
         )`,
      [userIp]
    );

    const [limitRows] = await pool.execute(
      `SELECT request_count
       FROM otp_ip_limits
       WHERE ip_address = ?`,
      [userIp]
    );

    if (!limitRows.length || Number(limitRows[0].request_count) > MAX_REQUESTS) {
      return NextResponse.json(
        {
          status: false,
          message: "OTP request limit reached. Please try again later.",
        },
        { status: 429 }
      );
    }

    // Send or resend OTP through MSG91
    const fullMobile = `${code}${mobile}`;
    const url = new URL(
      resend ? `${MSG91_URL}/retry` : MSG91_URL
    );

    url.searchParams.set("authkey", authkey);
    url.searchParams.set("mobile", fullMobile);

    if (!resend) {
      url.searchParams.set("template_id", template_id);
      url.searchParams.set("invisible", "1");
      url.searchParams.set("otp", String(otp));
    }

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    const data = await response.json();

    if (!response.ok || data?.type !== "success") {
      return NextResponse.json(
        {
          status: false,
          message: data?.message || "Unable to send OTP",
        },
        { status: response.ok ? 400 : response.status }
      );
    }

    // Save customer only after MSG91 accepts the OTP request.
    if (!resend) {
      const country = country_name || code;

      if (customer) {
        await pool.execute(
          `UPDATE customer_details
           SET name = ?,
               city = ?,
               country = ?,
               otp = ?,
               user_ip = ?,
               user_ip_count = COALESCE(user_ip_count, 0) + 1
           WHERE mobile_no = ?`,
          [
            customer_name || "",
            customer_city || "",
            country,
            String(otp),
            userIp,
            mobile,
          ]
        );
      } else {
        await pool.execute(
          `INSERT INTO customer_details
           (
             name, mobile_no, city, mobile_verified,
             email_verified, mob_email_verified, country,
             otp, user_ip, user_ip_count
           )
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            customer_name || "",
            mobile,
            customer_city || "",
            "0",
            "0",
            "0",
            country,
            String(otp),
            userIp,
            1,
          ]
        );
      }
    }

    return NextResponse.json({
      status: true,
      message: `(+${code}) ${mobile}`,
      customer: {
        name: customer_name || "",
        mobile,
        country_code: code,
        city: customer_city || "",
        country: country_name || "",
      },
      action: resend ? "resend" : "send",
    });
  } catch (error) {
    console.error("OTP request error:", error);

    return NextResponse.json(
      { status: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}