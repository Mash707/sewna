export default function Budget({ budget, setBudget }) {
  return (
    <div className="mt-4">
      <div className="text-sm font-medium mb-2">Budget (INR)</div>
      <input
        type="range"
        min={500}
        max={50000}
        step={100}
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <div className="text-sm mt-1">Approx. ₹{budget}</div>
    </div>
  );
}
