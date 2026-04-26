export default function Home() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex font-sans">

      {/* Sidebar */}
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-6 fixed h-screen">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-9 h-9 bg-violet-600 rounded-xl flex items-center justify-center text-2xl font-bold">T</div>
          <div className="text-2xl font-bold">TradLink</div>
        </div>

        <div className="space-y-1">
          <div className="bg-violet-600 text-white px-4 py-3 rounded-2xl flex items-center gap-3 font-medium">Dashboard</div>
          <div className="px-4 py-3 text-gray-400 hover:bg-zinc-800 rounded-2xl flex items-center gap-3">Trading</div>
          <div className="px-4 py-3 text-gray-400 hover:bg-zinc-800 rounded-2xl flex items-center gap-3">Portfolio</div>
          <div className="px-4 py-3 text-gray-400 hover:bg-zinc-800 rounded-2xl flex items-center gap-3">Social Feed</div>
          <div className="px-4 py-3 text-gray-400 hover:bg-zinc-800 rounded-2xl flex items-center gap-3">Bots Marketplace</div>
          <div className="px-4 py-3 text-gray-400 hover:bg-zinc-800 rounded-2xl flex items-center gap-3">Lucy AI Assistant</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <h1 className="text-4xl font-semibold mb-2">Welcome back, Prof. Trader! 👋</h1>
        <p className="text-gray-400 mb-8">Here's what's happening with your trading today.</p>

        <div className="grid grid-cols-4 gap-6 mb-12">
          <div className="bg-zinc-900 p-6 rounded-3xl">
            <p className="text-gray-400">Total P&L</p>
            <p className="text-4xl font-bold text-emerald-400 mt-2">₹1,24,350.75</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-3xl">
            <p className="text-gray-400">Portfolio Value</p>
            <p className="text-4xl font-bold mt-2">₹8,75,420.50</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-3xl">
            <p className="text-gray-400">Win Rate</p>
            <p className="text-4xl font-bold mt-2">72.45%</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-3xl">
            <p className="text-gray-400">Total Trades</p>
            <p className="text-4xl font-bold mt-2">128</p>
          </div>
        </div>
      </div>

      {/* Lucy Panel */}
      <div className="w-80 bg-zinc-900 border-l border-zinc-800 p-6 fixed right-0 h-screen">
        <div className="text-center mt-10">
          <div className="w-28 h-28 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl"></div>
          <h3 className="mt-6 text-xl font-semibold">Lucy AI Assistant</h3>
          <p className="text-emerald-400 text-sm mt-1">Online</p>
        </div>
      </div>
    </div>
  );
}
