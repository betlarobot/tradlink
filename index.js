{
  "name": "tradlink",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.23",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "^3.4.1"
  }
}import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  const menu = ["Dashboard", "Trading", "Portfolio", "Social Feed", "Lucy AI"];

  return (
    <div className="bg-zinc-950 text-white min-h-screen flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-zinc-900 p-6 border-r border-zinc-800">
        
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-violet-600 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xl">
            T
          </div>
          <div className="text-2xl font-bold">TradLink</div>
        </div>

        <div className="space-y-2">
          {menu.map((item) => (
            <div
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-3 rounded-xl flex items-center gap-3 cursor-pointer transition ${
                active === item
                  ? "bg-violet-600 text-white"
                  : "text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        
        <h1 className="text-4xl font-bold mb-2">
          {active === "Dashboard" && "Welcome back, Prof. Trader! 👋"}
          {active === "Trading" && "Trading Panel"}
          {active === "Portfolio" && "Your Portfolio"}
          {active === "Social Feed" && "Community Feed"}
          {active === "Lucy AI" && "AI Assistant"}
        </h1>

        <p className="text-zinc-400 mb-8">
          {active === "Dashboard" &&
            "Here's what's happening with your trading today."}
        </p>

        {/* Dashboard Content */}
        {active === "Dashboard" && (
          <div className="grid grid-cols-4 gap-6">
            
            <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition">
              <p className="text-zinc-400">Total P&L</p>
              <p className="text-4xl font-bold text-emerald-400 mt-2">
                ₹1,24,350
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition">
              <p className="text-zinc-400">Portfolio Value</p>
              <p className="text-4xl font-bold mt-2">
                ₹8,75,420
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition">
              <p className="text-zinc-400">Win Rate</p>
              <p className="text-4xl font-bold mt-2">
                72.45%
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition">
              <p className="text-zinc-400">Total Trades</p>
              <p className="text-4xl font-bold mt-2">
                128
              </p>
            </div>

          </div>
        )}

        {/* Placeholder Sections */}
        {active !== "Dashboard" && (
          <div className="text-zinc-500 text-lg mt-10">
            🚧 {active} section coming soon...
          </div>
        )}
      </div>

      {/* Lucy Sidebar */}
      <div className="w-80 bg-zinc-900 border-l border-zinc-800 p-6 flex flex-col">
        
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold">Lucy AI Assistant</h3>
          <p className="text-emerald-400 text-sm">Online</p>
        </div>

        {/* Chat Box */}
        <div className="flex-1 bg-zinc-800 rounded-xl p-4 text-sm text-zinc-400 overflow-y-auto">
          Lucy: Hello Prof 👋<br />
          Ask me about trades, signals, or strategy.
        </div>

        {/* Input */}
        <div className="mt-4 flex gap-2">
          <input
            placeholder="Ask Lucy..."
            className="flex-1 bg-zinc-800 px-4 py-2 rounded-xl text-sm outline-none"
          />
          <button className="bg-violet-600 px-4 rounded-xl">Send</button>
        </div>

      </div>
    </div>
  );
}
