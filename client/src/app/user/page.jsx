"use client";
import { Step1 } from "@/components/user.components/Step1";
import { Step2 } from "@/components/user.components/Step2";
import { Step3 } from "@/components/user.components/Step3";

import React, { useEffect, useState } from "react";

const Confirm = () => {
  const [step, setStep] = useState(1);
  const stepper = () => {
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    // get api -> data -> 3 biyluultsen router
  }, []);
  const token = window.localStorage.getItem("token");
  return (
    <div className="flex flex-col items-center relative top-10">
      <img className="w-[107px] h-10" src="/user/image.png" alt="" />
      {step == 1 ? <Step1 stepper={stepper} /> : ""}
      {step == 2 ? <Step2 stepper={stepper} /> : ""}
      {step == 3 ? <Step3 /> : ""}
    </div>
  );
};

export default Confirm;
