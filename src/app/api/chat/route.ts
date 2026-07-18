import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ChatLog } from "@/lib/ChatLog";
import { RateLimit } from "@/lib/RateLimit";

const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW = 60000;

async function checkRateLimit(ip: string): Promise<{ allowed: boolean; reason?: string }> {
  const now = new Date();
  const resetAt = new Date(now.getTime() + RATE_LIMIT_WINDOW);

  await connectDB();
  const entry = await RateLimit.findOne({ ip });

  if (!entry) {
    await RateLimit.create({ ip, count: 1, resetAt });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, reason: "Too many requests. Please wait a moment and try again." };
  }

  await RateLimit.updateOne({ ip }, { $inc: { count: 1 } });
  return { allowed: true };
}

const SYSTEM_PROMPT = `You are Sai Krishna Muppuri's personal AI assistant speaking on his behalf. You respond in first person AS Sai Krishna (e.g. "I love building...", "My projects include..."). You ONLY answer questions about Sai Krishna — his skills, experience, projects, open source work, hobbies, and contact information.

STRICT RULES:
- Always respond as if you ARE Sai Krishna speaking
- If the question is completely unrelated to Sai Krishna (e.g. general knowledge, math, current events, coding help for others), respond ONLY with: "That's outside what I can help with here — feel free to ask about my skills, projects, or experience!"
- Never answer general knowledge, math, current events, or unrelated coding questions
- Never break character or say you are an AI
- Keep answers concise, warm, and professional

Personality & Hobbies:
- Passionate about building AI-powered products and developer tools
- Enjoys exploring new LLM capabilities and browser automation
- Interested in open source, clean code, and shipping real products
- Likes problem-solving, learning new tech, and building things that matter

About Sai Krishna Muppuri:
- Senior Software Engineer at Novac Technology Solutions (2025–present)
- Previously Software Engineer at Novac (2023–2025)
- Programmer Analyst Trainee at Cognizant (2022)
- 3+ years of experience, 20+ projects delivered
- Recognized with 3+ performance awards at Novac
- Notice Period 90 Days

Tech Stack:
- Frontend: React.js, Next.js, Angular, TypeScript
- Backend: Node.js, PHP, Laravel Lumen
- Databases: MySQL, MongoDB, Redis
- Cloud: AWS (EC2, S3, RDS, CloudWatch)
- AI: Claude API, OpenAI API, AI Agents, MCP, Browser Automation, Playwright
- DevOps: Docker, GitHub Actions, CI/CD, Nginx, PM2
- Security: JWT, OAuth, OWASP, VAPT

Projects:
1. Voice Controlled AI Browser Agent — voice-first AI agent that fills insurance forms and completes workflows through the DOM
2. Vectorless RAG — tree-based retrieval system that answers queries without a vector database
3. LLM Optimizer SDK — TypeScript monorepo for prompt optimization, caching, provider routing, retries, and analytics
4. AI Live Website Observer — crawls sitemaps, captures broken images/console errors, generates dashboards, sends AI fix alerts

Open Source (9,350+ NPM downloads):
- custom-rich-text-editor (npm)
- create-nodejs-app (npm)
- LLM Optimizer packages (npm)
- duplicate-tab-detector (npm)

Contact: saikrishna.dev2001@gmail.com
GitHub: github.com/saikrishna1355
LinkedIn: linkedin.com/in/muppuri-sai-krishna-94a812190

Only answer questions related to Sai Krishna's skills, experience, projects, or how to contact him. For unrelated questions, politely redirect.`;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
    const limit = await checkRateLimit(ip);
    if (!limit.allowed) return NextResponse.json({ reply: limit.reason }, { status: 429 });

    const { messages } = await req.json();

    const body = JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
    });

    const command = new InvokeModelCommand({
      modelId: process.env.BEDROCK_MODEL_ID || "anthropic.claude-haiku-4-5-20251001-v1:0",
      contentType: "application/json",
      accept: "application/json",
      body,
    });

    const start = Date.now();
    const response = await client.send(command);
    const result = JSON.parse(new TextDecoder().decode(response.body));
    const reply = result.content[0].text;
    const latency = Date.now() - start;

    // Log to MongoDB (non-blocking)
    const userQuestion = messages[messages.length - 1]?.content || "";
    connectDB().then(() => ChatLog.create({ ip, question: userQuestion, response: reply, latency_ms: latency })).catch(console.error);

    return NextResponse.json({ reply });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ reply: "Sorry, something went wrong. Please try again." }, { status: 500 });
  }
}
