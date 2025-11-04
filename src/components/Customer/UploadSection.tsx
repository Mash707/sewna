export default function UploadSection({ inspiration, handleImage }) {
  return (
    <label className="block">
      <div className="text-sm font-medium mb-2">Inspiration Image</div>
      <div className="border rounded p-4 flex items-center gap-4">
        <input type="file" accept="image/*" onChange={handleImage} />
        {inspiration && (
          <img
            src={inspiration.url}
            alt="preview"
            className="h-20 w-20 object-cover rounded"
          />
        )}
      </div>
    </label>
  );
}
