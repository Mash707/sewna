export default function Measurements({ measurement, updateMeasurement }) {
  const fields = ["bust", "waist", "hip", "height"];
  return (
    <div>
      <div className="text-sm font-medium mb-2">Measurements (cm)</div>
      <div className="grid grid-cols-2 gap-2">
        {fields.map((f) => (
          <input
            key={f}
            value={measurement[f]}
            onChange={(e) => updateMeasurement(f, e.target.value)}
            placeholder={f}
            className="border rounded p-2"
          />
        ))}
      </div>
    </div>
  );
}
