export default function StyleTags({ styleTags, toggleTag }) {
  const tags = [
    "minimal",
    "boho",
    "bridal",
    "contemporary",
    "vintage",
    "sustainable",
  ];

  return (
    <label>
      <div className="text-sm font-medium mb-2">Style Tags</div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => toggleTag(t)}
            className={`px-3 py-1 rounded-full border ${
              styleTags.includes(t) ? "bg-[#00b67f] text-white" : ""
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </label>
  );
}
