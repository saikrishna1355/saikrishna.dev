import { ImageResponse } from "next/og";

// Browser tab icon: the brand mark from the nav ("S" + lime dot).
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0f0d",
          borderRadius: 8,
          border: "1.5px solid rgba(196,250,99,0.45)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", lineHeight: 1 }}>
          <span style={{ fontSize: 24, fontWeight: 800, color: "#e9eee9", marginTop: -2 }}>S</span>
          <span style={{ width: 5, height: 5, borderRadius: 3, background: "#c4fa63", marginLeft: 1, marginBottom: 4 }} />
        </div>
      </div>
    ),
    size
  );
}
