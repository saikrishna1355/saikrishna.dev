import { ImageResponse } from "next/og";

// Social share card (LinkedIn, X, WhatsApp, Slack). Generated at build time.
export const alt = "Sai Krishna Muppuri, AI-Focused Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TAGS = ["AI Agents", "Vectorless RAG", "LLM Infrastructure", "AI Monitoring", "App Security"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#e9eee9",
          background: "radial-gradient(circle at 85% 0%, rgba(196,250,99,0.22), transparent 55%), linear-gradient(160deg, #0d1611, #070b09)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 26, letterSpacing: 4, color: "#9fb0a5" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#c4fa63", marginRight: 16 }} />
          PORTFOLIO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            <span>Sai Krishna Muppuri</span>
            <span style={{ color: "#c4fa63" }}>.</span>
          </div>
          <div style={{ fontSize: 44, color: "#c4fa63", marginTop: 22 }}>AI-Focused Software Engineer</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {TAGS.map((t) => (
            <div
              key={t}
              style={{
                fontSize: 24,
                color: "#cfdad2",
                border: "1px solid rgba(196,250,99,0.35)",
                borderRadius: 999,
                padding: "10px 22px",
                marginRight: 14,
                marginTop: 10,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
