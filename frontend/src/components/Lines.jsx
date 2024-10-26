import React from "react";
import { BackgroundLines } from "/components/ui/background-lines";
import { TextHolder } from "./TextHolder";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <TextHolder />
    </BackgroundLines>
  );
}
