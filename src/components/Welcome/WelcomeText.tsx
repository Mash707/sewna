import BrandLogo from "../common/BrandLogo";

export default function WelcomeText({ onSelect }) {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight flex flex-wrap items-center gap-2">
        <BrandLogo />
        <div className="text-3xl">
          {" "}
          Connect with independent designers to create outfits you love.
        </div>
      </h1>
      <p className="mt-4 text-gray-600">
        Choose a designer, share your inspiration, and get a made-to-measure
        creation without the hassle of marketplaces.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={() => onSelect("customer")}
          className="px-5 py-3 rounded-lg border border-black font-medium hover:shadow bg-white"
        >
          I need a Designer
        </button>
        <button
          onClick={() => onSelect("designer")}
          className="px-5 py-3 rounded-lg bg-black text-white font-medium hover:opacity-90"
        >
          I am a Designer
        </button>
      </div>
    </div>
  );
}
