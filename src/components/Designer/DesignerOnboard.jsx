import BrandLogo from "../common/BrandLogo";

export default function DesignerOnboard({ onBack }) {
  return (
    <section
      className="min-h-screen p-6 md:p-10 flex flex-col items-center"
      style={{
        background: "linear-gradient(135deg, #f9fdfb 0%, #f6fff9 100%)",
      }}
    >
      {/* Header */}
      <header className="flex items-center justify-between mb-6 w-full max-w-6xl">
        <button
          onClick={onBack}
          className="text-sm text-gray-600 hover:text-[#00b67f] transition"
        >
          ← Back
        </button>
        <BrandLogo size="2.2rem" />
      </header>

      {/* Main content */}
      <div className="max-w-5xl w-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Join as a Designer
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Build your profile, upload your portfolio, and start connecting with
          clients looking for unique creations.
        </p>

        {/* Example form (you can customize this) */}
        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b67f]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Portfolio Link
            </label>
            <input
              type="url"
              placeholder="https://yourportfolio.com"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b67f]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 block mb-1">
              About You
            </label>
            <textarea
              rows="3"
              placeholder="Tell us about your work and style..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b67f] resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-[#00b67f] text-white font-medium hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
