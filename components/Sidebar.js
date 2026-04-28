export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0f172a] h-screen p-5">
      <h2 className="text-green-400 text-xl font-bold">TradLink</h2>

      <ul className="mt-10 space-y-4 text-gray-400">
        <li className="text-white">Dashboard</li>
        <li>Trading</li>
        <li>Portfolio</li>
        <li>Community</li>
        <li>Bots</li>
      </ul>
    </div>
  );
}
