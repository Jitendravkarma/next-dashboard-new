import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ---------- config ----------
const MSG91_URL = "https://api.msg91.com/api/v5/otp";
const OTP_LENGTH = 4;          // change to 6 if your MSG91 template supports it
const MAX_SEND_PER_HOUR = 5;   // send + resend attempts per IP per hour
const MAX_WRONG_TRIES = 5;     // wrong OTP tries per mobile ...
const WRONG_WINDOW_MS = 15 * 60 * 1000; // ... per 15 minutes

// One shared pool (survives hot reloads in dev)
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

// wrong-OTP counter (in memory: fine for one server process)
const wrongTries = (globalThis.__otpWrongTries ??= new Map());

// ---------- helpers ----------
const reply = (body, status = 200) => NextResponse.json(body, { status });

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

function resolveAction(body) {
  const a = body.action;
  if (a === "verify") return "verify";
  if (a === true || a === 1 || a === "1" || a === "true" || a === "resend") return "resend";
  if (body.resend === true || body.resend === "1" || body.resend === "true") return "resend"; // legacy field
  return "send";
}

function isLocked(mobile) {
  const e = wrongTries.get(mobile);
  if (!e) return false;
  if (Date.now() - e.first > WRONG_WINDOW_MS) {
    wrongTries.delete(mobile);
    return false;
  }
  return e.count >= MAX_WRONG_TRIES;
}

function addWrong(mobile) {
  const e = wrongTries.get(mobile);
  if (!e || Date.now() - e.first > WRONG_WINDOW_MS) {
    wrongTries.set(mobile, { count: 1, first: Date.now() });
  } else {
    e.count += 1;
  }
}

async function findCustomer(mobile) {
  const [rows] = await pool.execute(
    `SELECT mobile_no, mobile_verified, otp
     FROM customer_details
     WHERE mobile_no = ?
     LIMIT 1`,
    [mobile]
  );
  return rows[0];
}

// ---------- VERIFY ----------
async function verifyOtp(mobile, otp) {
  if (!new RegExp(`^\\d{${OTP_LENGTH}}$`).test(otp)) {
    return reply({ status: false, message: `Enter the ${OTP_LENGTH}-digit OTP` }, 400);
  }

  if (isLocked(mobile)) {
    return reply(
      { status: false, message: "Too many wrong attempts. Please try again later." },
      429
    );
  }

  const customer = await findCustomer(mobile);

  if (!customer) {
    return reply({ status: false, message: "Please request an OTP first" }, 404);
  }

  if (String(customer.mobile_verified) === "1") {
    return reply(
      { status: false, already_verified: true, message: "This number is already verified" },
      409
    );
  }

  if (String(customer.otp) !== otp) {
    addWrong(mobile);
    return reply({ status: false, message: "Invalid OTP" }, 400);
  }

  await pool.execute(
    `UPDATE customer_details SET mobile_verified = '1' WHERE mobile_no = ?`,
    [mobile]
  );
  wrongTries.delete(mobile);

  return reply({ status: true, verified: true, message: "Mobile number verified", action: "verify" });
}

// ---------- SEND / RESEND ----------
async function sendOtp(request, { resend, mobile, code, name, city, countryName }) {
  const authkey = "269369AIilt1Kc05c9a1be5";
  const template_id = "6799d7c2d6fc0540b5739de3";

  if (!authkey || !template_id) {
    console.error("MSG91 env vars missing");
    return reply({ status: false, message: "OTP service is not configured" }, 500);
  }

  const userIp = getUserIp(request);
  if (userIp === "unknown") {
    console.warn("Client IP unavailable; all such users share one rate-limit bucket.");
  }

  const customer = await findCustomer(mobile);

  if (customer && String(customer.mobile_verified) === "1") {
    return reply(
      { status: false, already_verified: true, message: "This number is already verified" },
      409
    );
  }

  if (resend && !customer) {
    return reply({ status: false, message: "Please request an OTP first" }, 404);
  }

  // Per-IP rate limit, resets after 1 hour. Needs UNIQUE KEY on otp_ip_limits.ip_address
  await pool.execute(
    `INSERT INTO otp_ip_limits (ip_address, request_count, window_started_at)
     VALUES (?, 1, NOW())
     ON DUPLICATE KEY UPDATE
       request_count = IF(
         window_started_at <= DATE_SUB(NOW(), INTERVAL 1 HOUR),
         1,
         LEAST(request_count + 1, ${MAX_SEND_PER_HOUR + 1})
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

  if (!limitRows.length || Number(limitRows[0].request_count) > MAX_SEND_PER_HOUR) {
    return reply(
      { status: false, message: "OTP request limit reached. Please try again later." },
      429
    );
  }

  // Server-generated OTP (never comes from the client, never returned to it)
  const otp = resend
    ? null
    : 5718;

  const url = new URL(resend ? `${MSG91_URL}/retry` : MSG91_URL);
  url.searchParams.set("authkey", authkey);
  url.searchParams.set("mobile", `${code}${mobile}`);

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
    return reply(
      { status: false, message: data?.message || "Unable to send OTP" },
      response.ok ? 400 : response.status
    );
  }

  // Save / update customer only after MSG91 accepted the request
  if (!resend) {
    const country = countryName || code;

    if (customer) {
      await pool.execute(
        `UPDATE customer_details
         SET name = ?, city = ?, country = ?, otp = ?, user_ip = ?,
             user_ip_count = COALESCE(user_ip_count, 0) + 1
         WHERE mobile_no = ?`,
        [name, city, country, otp, userIp, mobile]
      );
    } else {
      await pool.execute(
        `INSERT INTO customer_details
           (name, mobile_no, city, mobile_verified, email_verified,
            mob_email_verified, country, otp, user_ip, user_ip_count)
         VALUES (?, ?, ?, '0', '0', '0', ?, ?, ?, 1)`,
        [name, mobile, city, country, otp, userIp]
      );
    }
  }

  return reply({
    status: true,
    message: `(+${code}) ${mobile}`,
    action: resend ? "resend" : "send",
  });
}

// ---------- entry point ----------
export async function POST(request) {
  try {
    const body = await request.json();

    const action = resolveAction(body);
    const mobile = String(body.customer_mobile || "").replace(/\D/g, "");
    const code = String(body.country_code || "").replace(/\D/g, "");

    if (!mobile || !code || mobile.length > 15 || code.length > 4) {
      return reply(
        { status: false, message: "Valid mobile number and country code are required" },
        400
      );
    }

    if (code === "91" && !/^[6-9]\d{9}$/.test(mobile)) {
      return reply({ status: false, message: "Enter a valid 10-digit mobile number" }, 400);
    }

    if (action === "verify") {
      return await verifyOtp(mobile, String(body.otp || ""));
    }

    return await sendOtp(request, {
      resend: action === "resend",
      mobile,
      code,
      name: String(body.customer_name || "").trim(),
      city: String(body.customer_city || "").trim(),
      countryName: String(body.country_name || "").trim(),
    });
  } catch (error) {
    console.error("OTP route error:", error);
    return reply({ status: false, message: "Something went wrong" }, 500);
  }
}