"use client";

import { Chart } from "chart.js";

export const ExpenseChart = () => {
  return (
    <div className="w-[588px] h-[284px] bg-white rounded-xl flex flex-col">
      <div className=" h-[56px] border-b items-center flex pl-6 gap-2 border-[#E2E8F0]">
        <div className="font-medium text-base">Income - Expense</div>
      </div>
      <div className="flex flex-col gap-4 px-6 py-5 h-[226px] w-[588px]">
        <Chart
          type="donut"
          width={1300}
          height={500}
          series={[43, 54, 34, 65]}
        />
      </div>
    </div>
  );
};
