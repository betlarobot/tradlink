export default function Card({ title, value }) {
  return (
    <div className="bg-[#111827] p-5 rounded-xl shadow">
      <p className="text-gray-400">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}
