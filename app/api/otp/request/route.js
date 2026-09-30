// app/api/send-otp/route.js  (adjust the path to match your project)
import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
import { randomInt } from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Reuse one pool across hot reloads (prevents "Too many connections" in dev)
const pool =
  globalThis.__otpPool ??
  (globalThis.__otpPool = mysql.createPool({
    host: "localhost",
    port: Number(3306),
    user: "form_pack_user",
    password: "]wgW+Nu~Pplg",
    database: "form_pack_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }));

const MSG91_URL = "https://api.msg91.com/api/v5/otp";
const MAX_REQUESTS = 5; // OTP sends/resends allowed per IP per hour

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

// Accepts both JSON and form-urlencoded bodies
async function readBody(request) {
  const type = request.headers.get("content-type") || "";
  if (type.includes("application/json")) return await request.json();
  const form = await request.formData();
  return Object.fromEntries(form.entries());
}

export async function POST(request) {
  try {
    const body = await readBody(request);

    const {
      customer_name,
      customer_mobile,
      customer_city,
      country_name,
      country_code,
    } = body;

    // resend can arrive as true / "1" / "true"
    const resend = [true, 1, "1", "true"].includes(body.resend);

    // ---- Validate input ----
    const mobile = String(customer_mobile || "").replace(/\D/g, "");
    const code = String(country_code || "").replace(/\D/g, "");

    if (!mobile || !code || mobile.length > 15 || code.length > 4) {
      return NextResponse.json(
        { status: false, message: "Valid mobile number and country code are required" },
        { status: 400 }
      );
    }

    if (code === "91" && !/^[6-9]\d{9}$/.test(mobile)) {
      return NextResponse.json(
        { status: false, message: "Enter a valid 10-digit mobile number" },
        { status: 400 }
      );
    }

    const authkey = "269369AIilt1Kc05c9a1be5";
    const template_id = "6799d7c2d6fc0540b5739de3";

    if (!authkey || !template_id) {
      console.error("MSG91 env vars missing");
      return NextResponse.json(
        { status: false, message: "OTP service is not configured" },
        { status: 500 }
      );
    }

    const userIp = getUserIp(request);
    if (userIp === "unknown") {
      console.warn("Client IP unavailable; all such users share one rate-limit bucket.");
    }

    // ---- Find customer ----
    const [customerRows] = await pool.execute(
      `SELECT mobile_no, mobile_verified
       FROM customer_details
       WHERE mobile_no = ?
       LIMIT 1`,
      [mobile]
    );
    const customer = customerRows[0];

    if (customer && String(customer.mobile_verified) === "1") {
      return NextResponse.json(
        {
          status: false,
          already_verified: true,
          message: "This number is already verified",
        },
        { status: 409 }
      );
    }

    if (resend && !customer) {
      return NextResponse.json(
        { status: false, message: "Please request an OTP first" },
        { status: 404 }
      );
    }

    // ---- Per-IP rate limit (resets after 1 hour) ----
    // Needs: UNIQUE KEY on otp_ip_limits.ip_address
    await pool.execute(
      `INSERT INTO otp_ip_limits (ip_address, request_count, window_started_at)
       VALUES (?, 1, NOW())
       ON DUPLICATE KEY UPDATE
         request_count = IF(
           window_started_at <= DATE_SUB(NOW(), INTERVAL 1 HOUR),
           1,
           LEAST(request_count + 1, ${MAX_REQUESTS + 1})
         ),
         window_started_at = IF(
           window_started_at <= DATE_SUB(NOW(), INTERVAL 1 HOUR),
           NOW(),
           window_started_at
         )`,
      [userIp]
    );

    const [limitRows] = await pool.execute(
      `SELECT request_count FROM otp_ip_limits WHERE ip_address = ?`,
      [userIp]
    );

    if (!limitRows.length || Number(limitRows[0].request_count) > MAX_REQUESTS) {
      return NextResponse.json(
        { status: false, message: "OTP request limit reached. Please try again later." },
        { status: 429 }
      );
    }

    // ---- Send / resend through MSG91 ----
    // OTP is generated on the SERVER; the client never sees or sends it.
    const otp = resend ? null : String(randomInt(1000, 10000)); // 4 digits

    const fullMobile = `${code}${mobile}`;
    const url = new URL(resend ? `${MSG91_URL}/retry` : MSG91_URL);

    url.searchParams.set("authkey", authkey);
    url.searchParams.set("mobile", fullMobile);

    if (resend) {
      url.searchParams.set("retrytype", "text"); // required by MSG91 retry API
    } else {
      url.searchParams.set("template_id", template_id);
      url.searchParams.set("invisible", "1");
      url.searchParams.set("otp", otp);
    }

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok || data?.type !== "success") {
      console.error("MSG91 error:", response.status, data);
      return NextResponse.json(
        { status: false, message: data?.message || "Unable to send OTP" },
        { status: response.ok ? 400 : response.status }
      );
    }

    // ---- Save customer only after MSG91 accepts the request ----
    if (!resend) {
      const country = country_name || code;

      if (customer) {
        await pool.execute(
          `UPDATE customer_details
           SET name = ?, city = ?, country = ?, otp = ?, user_ip = ?,
               user_ip_count = COALESCE(user_ip_count, 0) + 1
           WHERE mobile_no = ?`,
          [customer_name || "", customer_city || "", country, otp, userIp, mobile]
        );
      } else {
        await pool.execute(
          `INSERT INTO customer_details
             (name, mobile_no, city, mobile_verified, email_verified,
              mob_email_verified, country, otp, user_ip, user_ip_count)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            customer_name || "",
            mobile,
            customer_city || "",
            "0",
            "0",
            "0",
            country,
            otp,
            userIp,
            1,
          ]
        );
      }
    }

    // Never return the OTP in the response
    return NextResponse.json({
      status: true,
      message: `(+${code}) ${mobile}`,
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