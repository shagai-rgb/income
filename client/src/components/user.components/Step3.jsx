import React from "react";
import { Steps } from "./steps/Steps";
import StepSelect from "./steps/StepSelect";
import { useRouter } from "next/navigation";

export const Step3 = () => {
  const { push } = useRouter();
  const goHome = () => {
    push("/");
  };
  return (
    <div className="flex flex-col items-center">
      <Steps step2={true} step3={true} />
      <img className="w-12 h-12 mt-[141px]" src="steps/image2.png" alt="" />
      <div className="w-[384px] flex flex-col items-center mt-4">
        <div className="text-2xl font-semibold mt-4">Good Job!</div>

        <div className="text-[#475569] text-xs font-normal mt-3">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </div>
      </div>
      <button
        onClick={() => {
          goHome();
        }}
        className="btn btn-primary text-xl w-[384px] font-normal bg-[#0166FF] hover:bg-[#0166FF] mt-[32px] text-white rounded-[20px]"
      >
        Go to Dashboard
      </button>
    </div>
  );
};