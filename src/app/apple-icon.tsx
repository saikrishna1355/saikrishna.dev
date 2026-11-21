import { ImageResponse } from "next/og";

// iOS home-screen icon. iOS rounds the corners itself, so the background is full-bleed.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 80% 10%, rgba(196,250,99,0.25), transparent 60%), #0a0f0d",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", lineHeight: 1 }}>
          <span style={{ fontSize: 120, fontWeight: 800, color: "#e9eee9" }}>S</span>
          <span style={{ width: 24, height: 24, borderRadius: 12, background: "#c4fa63", marginLeft: 4, marginBottom: 22 }} />
        </div>
      </div>
    ),
    size
  );
}
