"use client";

import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Sai's AI assistant. Ask me anything about his skills, projects, or experience." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const updated: Message[] = [...messages, { role: "user", content: text }];
    setMessages(updated);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated.filter(m => m.role !== "assistant" || updated.indexOf(m) > 0) }),
      });
      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...updated, { role: "assistant", content: "Something went wrong. Please try again." }]);
    }
    setLoading(false);
  };

  return (
    <>
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div><span className="pulse" /> ASK ABOUT SAI</div>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`} dangerouslySetInnerHTML={{ __html: m.role === "assistant" ? m.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br />") : m.content }} />
            ))}
            {loading && <div className="chat-msg assistant chat-typing"><span /><span /><span /></div>}
            <div ref={bottomRef} />
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Ask anything..."
              autoFocus
            />
            <button onClick={send} disabled={loading}>↗</button>
          </div>
        </div>
      )}
      <button className="chat-bubble" onClick={() => setOpen(o => !o)}>
        {open ? "✕" : (
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="12" stroke="#0a0f0d" strokeWidth="1.5" fill="none" className="bot-ring" />
            <rect x="7" y="8" width="12" height="9" rx="2" fill="#0a0f0d" />
            <circle cx="10" cy="12" r="1.2" fill="#c4fa63" className="bot-eye" />
            <circle cx="16" cy="12" r="1.2" fill="#c4fa63" className="bot-eye" />
            <path d="M10 15.5 Q13 17.5 16 15.5" stroke="#c4fa63" strokeWidth="1" strokeLinecap="round" fill="none" />
            <line x1="10" y1="8" x2="10" y2="6" stroke="#0a0f0d" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16" y1="8" x2="16" y2="6" stroke="#0a0f0d" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="5.5" r="1" fill="#0a0f0d" />
            <circle cx="16" cy="5.5" r="1" fill="#0a0f0d" />
          </svg>
        )}
      </button>
    </>
  );
}
