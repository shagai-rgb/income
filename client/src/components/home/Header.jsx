"use client";
import React, { useState } from "react";
import { Button } from "./Button";

export const Header = ({ buttonBoard, buttonRecords }) => {
  const [dash, setDash] = useState(true);
  const buttonDash = () => {
    setDash(true);
  };
  const buttonRecord = () => {
    setDash(false);
  };
  if (dash) {
    buttonBoard();
  } else {
    buttonRecords();
  }
  return (
    <div className="w-screen bg-white h-[72px] flex justify-center">
      <div className="w-[1200px] flex items-center justify-between ">
        <div className="flex gap-6">
          <img
            className="w-[27px] h-[27px]"
            src="/header/image.png
          "
            alt=""
          />
          <div
            onClick={() => {
              buttonDash();
            }}
            className={`cursor-pointer ${
              dash ? "font-semibold" : "font-normal"
            }`}
          >
            Dashboard
          </div>
          <div
            onClick={() => {
              buttonRecord();
            }}
            className={`cursor-pointer ${
              !dash ? "font-semibold" : "font-normal"
            }`}
          >
            Records
          </div>
        </div>
        <div className="flex gap-6 font- items-center">
          <div className="w-[99px] h-[32px]">
            <Button text={"+ Record"} />
          </div>

          <img
            className="w-10 h-10 rounded-full"
            src="header/profileimage.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
