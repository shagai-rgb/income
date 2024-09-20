"use client";
import React from "react";

export const Steps = ({ step2, step3 }) => {
  return (
    <ul className="steps font-normal text-sm  mt-12 w-[240px]">
      <li className="step step-primary ">Currency</li>
      <li className={`step ${step2 ? "step-primary" : ""}`}>Balance</li>
      <li className={`step ${step3 ? "step-primary" : ""}`}>Finish</li>
    </ul>
  );
};
