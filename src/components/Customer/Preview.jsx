export default function Preview({
  inspiration,
  styleTags,
  measurement,
  budget,
}) {
  return (
    <aside className="col-span-1 bg-gray-50 p-4 rounded-lg">
      <div className="text-sm font-medium mb-2">Preview</div>
      <div className="h-48 rounded bg-white border flex items-center justify-center overflow-hidden">
        {inspiration ? (
          <img
            src={inspiration.url}
            alt="inspiration"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-sm">No image</div>
        )}
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <div>
          <strong>Tags:</strong> {styleTags.join(", ") || "—"}
        </div>
        <div className="mt-2">
          <strong>Measurements:</strong> {measurement.bust || "-"} /{" "}
          {measurement.waist || "-"} / {measurement.hip || "-"} cm
        </div>
        <div className="mt-2">
          <strong>Budget:</strong> ₹{budget}
        </div>
      </div>
    </aside>
  );
}
