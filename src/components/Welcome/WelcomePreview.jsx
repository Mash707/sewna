export default function WelcomePreview() {
  const images = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1760031033670-e062ac87aac9?auto=format&fit=crop&w=800&q=60",
    "https://plus.unsplash.com/premium_photo-1682097137926-f94ad95bfb71?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1741709847316-0f5f29779ae7?auto=format&fit=crop&w=800&q=60",
  ];

  return (
    <div
      className="rounded-xl p-6 shadow-sm backdrop-blur-sm"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)", // soft translucent white
        border: "1px solid rgba(255, 255, 255, 0.4)", // subtle border blend
      }}
    >
      <div className="flex flex-col">
        <div className="font-semibold tracking-tight text-gray-800">
          Featured Designer
        </div>
        <div className="text-xs text-gray-600 mb-4">
          An exclusive pick by SEWNA
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-cover bg-center hover:scale-[1.02] transition-transform duration-200"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="mt-6 text-xs text-gray-500">
        Soft, confident, warm — design language focused on calm and craft.
      </div>
    </div>
  );
}
