export default function BrandLogo({ size = "2.5rem", color = "#00b67f" }) {
  return (
    <div
      className="logo-font text-lg sm:text-xl md:text-2xl transition-transform duration-300 cursor-pointer hover:scale-105"
      style={{
        fontSize: size,
        letterSpacing: "-0.02em",
        textShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px",
        display: "flex",
        alignItems: "baseline",
        color,
      }}
    >
      <span
        style={{
          fontFamily: "Pacifico, cursive",
          fontWeight: 100,
        }}
      >
        se
      </span>
      <span
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "1.7rem",
          letterSpacing: "-0.2em",
        }}
      >
        W
        <i
          style={{
            fontSize: "1.7rem",
            fontFamily: "Poppins, sans-serif",
            fontStyle: "italic",
            letterSpacing: "0em",
          }}
        >
          N
        </i>
      </span>
      <span
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 410,
          letterSpacing: "-0.02em",
          fontSize: "2.2rem",
        }}
      >
        a.
      </span>
    </div>
  );
}
