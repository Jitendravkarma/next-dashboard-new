import { NextResponse } from "next/server";
import { randomInt } from "crypto";

export const runtime = "nodejs";

const MSG91_URL = "https://api.msg91.com/api/v5/otp";

// function getUserIp(request) {
//   const forwarded = request.headers.get("x-forwarded-for");
//   if (forwarded) {
//     const ip = forwarded.split(",")[0].trim();
//     if (ip) return ip;
//   }
//   const realIp = request.headers.get("x-real-ip");
//   if (realIp) return realIp.trim();
//   return "unknown";
// }

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

    const authkey = "269369AIilt1Kc05c9a1be5";
    const template_id = "6799d7c2d6fc0540b5739de3";

    if (!authkey || !template_id) {
      return NextResponse.json(
        { status: false, message: "MSG91 configuration is missing" },
        { status: 500 }
      );
    }

    // const userIp = getUserIp(request);

    // if (userIp === "unknown") {
    //   console.warn("Client IP unavailable; check your proxy configuration.");
    // }

    // Send or resend OTP through MSG91
    const randomOtp = randomInt(10 ** (4 - 1), 10 ** 4);
    const fullMobile = `${code}${mobile}`;
    const url = new URL(
      resend ? `${MSG91_URL}/retry` : MSG91_URL
    );

    url.searchParams.set("authkey", authkey);
    url.searchParams.set("mobile", fullMobile);

    if (!resend) {
      url.searchParams.set("template_id", template_id);
      url.searchParams.set("invisible", "1");
      url.searchParams.set("otp", String(randomOtp));
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

    function generateRandom4DigitNumber() {
      return Math.floor(1000 + Math.random() * 9000);
    }
    const newOtp = randomOtp + 1050 + 325;
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
      otp_id: `${generateRandom4DigitNumber()}${newOtp}${generateRandom4DigitNumber()}`
    });
  } catch (error) {
    console.error("OTP request error:", error);

    return NextResponse.json(
      { status: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}