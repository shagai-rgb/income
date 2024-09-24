"use client";
import React, { useState } from "react";
import { Steps } from "./steps/Steps";

export const Step2 = ({ stepper, balanceHandler }) => {
  const [data, setData] = useState("");
  return (
    <div className="flex flex-col items-center">
      <Steps step2={true} step3={false} />
      <img className="w-12 h-12 mt-[141px]" src="steps/image1.png" alt="" />
      <div className="w-[384px] flex flex-col items-center mt-4">
        <div className="text-2xl font-semibold mt-4">
          Set up your cash Balance
        </div>
        <input
          onChange={(e) => {
            setData(e.target.value);
          }}
          type="number"
          placeholder="Balance"
          className="input input-bordered w-full mt-6 bg-[#F3F4F6]"
          step="1000"
          min="0"
        />
        <div className="text-[#475569] text-xs font-normal mt-3">
          How much cash do you have in your wallet?
        </div>
        <button
          onClick={() => {
            if (data !== "") {
              stepper();
              balanceHandler(data);
            }
          }}
          className="btn btn-primary text-xl w-[384px] font-normal bg-[#0166FF] hover:bg-[#0166FF] mt-[32px] text-white rounded-[20px]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
