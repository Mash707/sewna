import React, { useState } from "react";
import Welcome from "./components/Welcome/Welcome";
import DesignerOnboard from "./components/Designer/DesignerOnboard";
import CustomRequest from "./components/Customer/CustomerRequest";

export default function App() {
  const [view, setView] = useState("welcome");

  return (
    <div className="font-sans text-black">
      {view === "welcome" && <Welcome onSelect={setView} />}
      {view === "designer" && (
        <DesignerOnboard onBack={() => setView("welcome")} />
      )}
      {view === "customer" && (
        <CustomRequest onBack={() => setView("welcome")} />
      )}
    </div>
  );
}
