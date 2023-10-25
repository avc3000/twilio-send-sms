import { NextResponse } from "next/server";
import twilio from "twilio";

const account_sid = process.env.TWILIO_ACCOUNT_SID;
const auth_token = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(account_sid, auth_token);

export async function POST(request) {
  try {
    const data = await request.json();
    const message = await client.messages.create({
      body: data.message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: data.phone,
    });
    return NextResponse.json({ message: message });
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending message." },
      { status: 400 }
    );
  }
}
