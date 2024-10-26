"use client";

import { PlaceholdersAndVanishInput } from "/components/ui/placeholders-and-vanish-input";
export function TextHolder() {
  const placeholders = [
    "What are the fundamental rights?",
    "How to file a FIR?",
    "Can you tell me points of property Law?",
    "How to register a trademark in India?",
    "What is marriage act?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight mt-20">
        Ask LawEase
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
