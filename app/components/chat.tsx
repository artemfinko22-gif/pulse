"use client";

import { useState, useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("pulse_messages");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("pulse_messages", JSON.stringify(messages));
  }, [messages]);

  function sendMessage() {
    if (!text.trim()) return;
    setMessages([...messages, text]);
    setText("");
  }

  return (
    <div style={{ marginTop: 20 }}>
      <div
        style={{
          height: 300,
          overflowY: "auto",
          border: "1px solid #3b0764",
          padding: 10,
          borderRadius: 10,
          background: "#12001f"
        }}
      >
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            💬 {m}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write message..."
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 8,
            border: "1px solid #6b21a8",
            background: "#1a002b",
            color: "white"
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "10px 15px",
            background: "#a855f7",
            border: "none",
            borderRadius: 8,
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
