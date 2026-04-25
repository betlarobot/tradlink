export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold text-violet-400">
              TradLink Network
            </h1>
            <p className="text-2xl text-zinc-400 mt-2">
              One App For All Traders
            </p>
          </div>

          <button className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-medium transition">
            Launch Dashboard
          </button>
        </div>

        {/* Hero Section */}
        <div className="mt-20 text-center">
          <div className="text-6xl mb-6">📊</div>

          <h2 className="text-4xl font-semibold mb-4">
            Professional Trading Dashboard
          </h2>

          <p className="text-zinc-400 text-xl max-w-md mx-auto">
            अभी हम पूरा डैशबोर्ड बना रहे हैं।<br />
            प्रोफेसर, आपका UI तैयार हो चुका है।
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-6 mt-20">

          <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-xl font-semibold mb-2">📈 Live Trading</h3>
            <p className="text-zinc-400">
              Real-time charts with advanced indicators
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-xl font-semibold mb-2">🤖 Lucy AI</h3>
            <p className="text-zinc-400">
              AI-powered trading assistant & signals
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition">
            <h3 className="text-xl font-semibold mb-2">💼 Portfolio</h3>
            <p className="text-zinc-400">
              Track performance & manage assets easily
            </p>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center text-zinc-500">
          🚀 Next Step: Charts + AI Panel + Live Data Integration
        </div>

      </div>
    </div>
  );
}
