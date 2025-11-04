export default function TextArea({ label, value, setValue }) {
  return (
    <label>
      <div className="text-sm font-medium mb-2">{label}</div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border rounded p-3"
        rows={4}
      ></textarea>
    </label>
  );
}
