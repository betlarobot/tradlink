export default function LucyPanel() {
  return (
    <div className="w-80 bg-[#0f172a] h-screen p-5 flex flex-col">
      <h3 className="text-lg font-bold">🤖 Lucy AI</h3>

      <div className="flex-1 mt-4 text-gray-400 text-sm">
        Ask anything about your trades...
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Type message..."
          className="w-full p-2 rounded bg-[#111827] outline-none"
        />
        <button className="w-full mt-2 bg-green-500 p-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
