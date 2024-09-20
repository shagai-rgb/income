"use client";
import React from "react";
import { Steps } from "@/components/user.components/steps/Steps";
import StepSelect from "@/components/user.components/steps/StepSelect";

export const Step1 = ({ stepper }) => {
  return (
    <div className="flex flex-col items-center">
      <Steps step2={false} step3={false} />
      <img className="w-12 h-12 mt-[141px]" src="steps/image.png" alt="" />
      <StepSelect />
      <button
        onClick={() => {
          stepper();
        }}
        className="btn btn-primary text-xl w-[384px] font-normal bg-[#0166FF] hover:bg-[#0166FF] mt-[32px] text-white rounded-[20px]"
      >
        Confirm
      </button>
    </div>
  );
};