import WelcomeText from "./WelcomeText";
import WelcomePreview from "./WelcomePreview";

export default function Welcome({ onSelect }) {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-white p-6"
      style={{
        background: "linear-gradient(135deg, #f9f9f9 0%, #f3fff8 100%)",
      }}
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <WelcomeText onSelect={onSelect} />
        <WelcomePreview />
      </div>
    </section>
  );
}
