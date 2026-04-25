"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await fetch("/api/lucy", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    });

    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 TradLink Network</h1>

      <h2>Lucy AI</h2>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask Lucy..."
      />
      <button onClick={sendMessage}>Send</button>

      <p>{reply}</p>

      <a href="/tracking">Go to Tracking Dashboard</a>
    </div>
  );
}
