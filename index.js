export default function Home() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-zinc-900 p-6 border-r border-zinc-800">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-violet-600 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xl">T</div>
          <div className="text-2xl font-bold">TradLink</div>
        </div>

        <div className="space-y-2">
          <div className="bg-violet-600 px-4 py-3 rounded-xl flex items-center gap-3">Dashboard</div>
          <div className="px-4 py-3 text-zinc-400 hover:bg-zinc-800 rounded-xl flex items-center gap-3">Trading</div>
          <div className="px-4 py-3 text-zinc-400 hover:bg-zinc-800 rounded-xl flex items-center gap-3">Portfolio</div>
          <div className="px-4 py-3 text-zinc-400 hover:bg-zinc-800 rounded-xl flex items-center gap-3">Social Feed</div>
          <div className="px-4 py-3 text-zinc-400 hover:bg-zinc-800 rounded-xl flex items-center gap-3">Lucy AI</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-2">Welcome back, Prof. Trader! 👋</h1>
        <p className="text-zinc-400 mb-8">Here's what's happening with your trading today.</p>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-400">Total P&L</p>
            <p className="text-4xl font-bold text-emerald-400 mt-2">₹1,24,350</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-400">Portfolio Value</p>
            <p className="text-4xl font-bold mt-2">₹8,75,420</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-400">Win Rate</p>
            <p className="text-4xl font-bold mt-2">72.45%</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-400">Total Trades</p>
            <p className="text-4xl font-bold mt-2">128</p>
          </div>
        </div>
      </div>

      {/* Lucy Sidebar */}
      <div className="w-80 bg-zinc-900 border-l border-zinc-800 p-6">
        <div className="text-center">
          <div className="text-5xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold">Lucy AI Assistant</h3>
          <p className="text-emerald-400 text-sm">Online</p>
        </div>
      </div>
    </div>
  );
}
