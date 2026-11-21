import type { ReactNode } from "react";

// Minimal, safe renderer for **bold**, [text](url) and "- " bullet lists.
// It builds React elements only, so no raw HTML is ever injected.

const INLINE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
const SAFE_URL = /^(https?:\/\/|mailto:)/i;

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(INLINE)) {
    const start = m.index ?? 0;
    if (start > last) out.push(text.slice(last, start));
    if (m[1] !== undefined) {
      out.push(<strong key={key++}>{m[1]}</strong>);
    } else if (SAFE_URL.test(m[3])) {
      out.push(
        <a key={key++} href={m[3]} target="_blank" rel="noopener noreferrer">
          {m[2]}
        </a>
      );
    } else {
      out.push(m[0]);
    }
    last = start + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function RichText({ text }: { text: string }) {
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];
  let paragraph: string[] = [];

  const flushBullets = () => {
    if (!bullets.length) return;
    blocks.push(
      <ul key={blocks.length} style={{ margin: "6px 0", paddingLeft: 18 }}>
        {bullets.map((b, i) => (
          <li key={i}>{inline(b)}</li>
        ))}
      </ul>
    );
    bullets = [];
  };
  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push(
      <p key={blocks.length} style={{ margin: "6px 0" }}>
        {inline(paragraph.join(" "))}
      </p>
    );
    paragraph = [];
  };

  for (const line of text.split("\n")) {
    if (line.startsWith("- ")) {
      flushParagraph();
      bullets.push(line.slice(2));
    } else if (line.trim() === "") {
      flushBullets();
      flushParagraph();
    } else {
      flushBullets();
      paragraph.push(line);
    }
  }
  flushBullets();
  flushParagraph();

  return <>{blocks}</>;
}
