import React, { useState } from "react";
import UploadSection from "./UploadSection";
import StyleTags from "./StyleTags";
import Measurements from "./Measurements";
import Budget from "./Budget";
import Preview from "./Preview";
import TextArea from "../common/TextArea";
import BrandLogo from "../common/BrandLogo";

export default function CustomRequest({ onBack }) {
  const [inspiration, setInspiration] = useState(null);
  const [description, setDescription] = useState("");
  const [styleTags, setStyleTags] = useState([]);
  const [measurement, setMeasurement] = useState({
    bust: "",
    waist: "",
    hip: "",
    height: "",
  });
  const [budget, setBudget] = useState(2500);
  const [submitted, setSubmitted] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (file) setInspiration({ url: URL.createObjectURL(file) });
  };

  const toggleTag = (tag) => {
    setStyleTags((tags) =>
      tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]
    );
  };

  const updateMeasurement = (k, v) => setMeasurement((m) => ({ ...m, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      {/* Form Container */}
      <div className="max-w-6xl w-full">
        <form
          onSubmit={submit}
          className="rounded-2xl border border-gray-100 bg-white/70 backdrop-blur-sm shadow-sm p-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Left - Input Area */}
          <div className="col-span-2 space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Let’s bring your idea to life ✨
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
                Upload, describe, and customize your request.
              </p>
            </div>

            {/* Upload */}
            <UploadSection
              inspiration={inspiration}
              handleImage={handleImage}
            />

            {/* Description */}
            <TextArea
              label="Describe your outfit"
              value={description}
              setValue={setDescription}
            />

            {/* Tags */}
            <StyleTags styleTags={styleTags} toggleTag={toggleTag} />

            {/* Measurements */}
            <Measurements
              measurement={measurement}
              updateMeasurement={updateMeasurement}
            />

            {/* Budget */}
            <Budget budget={budget} setBudget={setBudget} />

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-[#00b67f] text-white font-medium hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                Submit Request
              </button>
            </div>
          </div>

          {/* Right - Preview */}
          <Preview
            inspiration={inspiration}
            styleTags={styleTags}
            measurement={measurement}
            budget={budget}
          />
        </form>

        {submitted && (
          <div className="mt-6 bg-[#00b67f]/10 border border-[#00b67f]/20 text-[#00b67f] rounded-lg p-3 text-center text-sm font-medium">
            🎉 Thank you! Your request has been submitted.
          </div>
        )}
      </div>
    </section>
  );
}
