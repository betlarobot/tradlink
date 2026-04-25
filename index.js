export default function Home() {
  return (
    <div className="bg- text-white min-h-screen flex font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-[#111111] p-6 border-r border- fixed h-screen overflow-y-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-9 h-9 bg-violet-600 rounded-xl flex items-center justify-center text-xl font-bold">T</div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">TradLink</h1>
            <p className="text- text-gray-500 -mt-1">One App For All Traders</p>
          </div>
        </div>

        <div className="space-y-1">
          <div className="bg-violet-600 text-white px-4 py-3 rounded-2xl flex items-center gap-3 font-medium">Dashboard</div>
          <div className="px-4 py-3 text-gray-400 hover:bg- rounded-2xl flex items-center gap-3 cursor-pointer">Trading</div>
          <div className="px-4 py-3 text-gray-400 hover:bg- rounded-2xl flex items-center gap-3 cursor-pointer">Portfolio</div>
          <div className="px-4 py-3 text-gray-400 hover:bg- rounded-2xl flex items-center gap-3 cursor-pointer">Social Feed</div>
          <div className="px-4 py-3 text-gray-400 hover:bg- rounded-2xl flex items-center gap-3 cursor-pointer">Bots Marketplace</div>
          <div className="px-4 py-3 text-gray-400 hover:bg- rounded-2xl flex items-center gap-3 cursor-pointer">Lucy AI Assistant</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-semibold">Welcome back, Prof. Trader! 👋</h2>
            <p className="text-gray-400">Here's what's happening with your trading today.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-[#111111] p-6 rounded-3xl">
            <p className="text-gray-400 text-sm">Total P&L</p>
            <p className="text-4xl font-bold text-emerald-400 mt-3">₹1,24,350</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-3xl">
            <p className="text-gray-400 text-sm">Portfolio Value</p>
            <p className="text-4xl font-bold mt-3">₹8,75,420</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-3xl">
            <p className="text-gray-400 text-sm">Win Rate</p>
            <p className="text-4xl font-bold mt-3">72.45%</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-3xl">
            <p className="text-gray-400 text-sm">Total Trades</p>
            <p className="text-4xl font-bold mt-3">128</p>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
         
        </div>
      </div>
    </div>
  );
}
