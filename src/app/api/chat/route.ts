import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ChatLog } from "@/lib/ChatLog";
import { RateLimit } from "@/lib/RateLimit";
import { answer } from "@/lib/answer";

const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW = 60_000;
const MAX_QUESTION_LENGTH = 300;

// Atomic counter per IP. If the database is unavailable, allow the request:
// answering is cheap now (no paid API), so availability matters more.
async function isAllowed(ip: string): Promise<boolean> {
  try {
    await connectDB();
    const now = new Date();
    const entry = await RateLimit.findOneAndUpdate(
      { ip },
      { $inc: { count: 1 }, $setOnInsert: { resetAt: new Date(now.getTime() + RATE_LIMIT_WINDOW) } },
      { upsert: true, new: true }
    );
    // The TTL cleanup runs about once a minute, so reset stale windows here.
    if (entry.resetAt < now) {
      await RateLimit.updateOne(
        { ip },
        { count: 1, resetAt: new Date(now.getTime() + RATE_LIMIT_WINDOW) }
      );
      return true;
    }
    return entry.count <= RATE_LIMIT_MAX;
  } catch (err) {
    console.error("rate limit check failed", err);
    return true;
  }
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!(await isAllowed(ip))) {
    return NextResponse.json(
      { reply: "Too many requests. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  let question = "";
  try {
    const body = await req.json();
    const messages: unknown = body?.messages;
    if (Array.isArray(messages)) {
      const last = messages[messages.length - 1];
      if (last && last.role === "user" && typeof last.content === "string") {
        question = last.content.trim().slice(0, MAX_QUESTION_LENGTH);
      }
    }
  } catch {
    // fall through to the 400 below
  }
  if (!question) {
    return NextResponse.json({ reply: "Please type a question." }, { status: 400 });
  }

  const start = Date.now();
  const { reply } = answer(question);
  const latency = Date.now() - start;

  // Log in the background; logging must never block or fail the reply.
  connectDB()
    .then(() => ChatLog.create({ ip, question, response: reply, latency_ms: latency }))
    .catch(console.error);

  return NextResponse.json({ reply });
}
