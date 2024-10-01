"use client";

import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const Records = () => {
  return (
    <div className="flex gap-6 my-6 justify-start">
      <LeftSide />
      <RightSide />
    </div>
  );
};
