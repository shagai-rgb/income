"use client";
import React from "react";
import { Button } from "./Button";

export const Header = () => {
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
          <div>Dashboard</div>
          <div>Records</div>
        </div>
        <div className="flex gap-6 items-center">
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
