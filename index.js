export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      
      <div className="text-center max-w-xl">

        <h1 className="text-8xl font-bold text-violet-500 mb-4 tracking-tight">
          TradLink
        </h1>

        <p className="text-2xl text-zinc-400">
          One App For All Traders
        </p>

        <div className="mt-12 text-xl text-gray-500">
          Premium Trading Dashboard<br />
          Coming Soon...
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex gap-4 justify-center">
          
          <button className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-medium transition">
            Join Waitlist
          </button>

          <button className="border border-zinc-700 hover:bg-zinc-800 px-6 py-3 rounded-xl font-medium transition">
            View Demo
          </button>

        </div>

      </div>

    </div>
  );
}
