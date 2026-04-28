export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#020617] text-white">
      
      <div className="text-center">

        {/* Title */}
        <h1 className="text-6xl font-bold text-green-500">
          TradLink
        </h1>

        {/* Tagline */}
        <p className="text-gray-400 mt-3 text-lg">
          One App for All Traders
        </p>

        {/* Description */}
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          AI-powered trading dashboard with analytics, social trading, and smart insights.
        </p>

        {/* Button */}
        <a href="/dashboard">
          <button className="mt-6 px-6 py-3 bg-green-500 rounded-lg text-black font-semibold hover:scale-105 transition">
            Enter Dashboard
          </button>
        </a>

      </div>

    </div>
  );
}
