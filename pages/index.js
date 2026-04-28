export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-500">
          TradLink Network
        </h1>
        <p className="text-gray-400 mt-2">
          One App for All Traders
        </p>

        <a href="/dashboard">
          <button className="mt-5 px-6 py-2 bg-green-500 rounded-lg">
            Enter Dashboard
          </button>
        </a>
      </div>
    </div>
  );
}
