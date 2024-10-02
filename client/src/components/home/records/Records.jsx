"use client";

import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const Records = ({ open, handleOpen, handleClose }) => {
  return (
    <div className="flex gap-6 my-6 justify-start">
      <LeftSide open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <RightSide />
    </div>
  );
};
