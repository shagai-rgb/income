"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export const ExpenseCard = () => {
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const totalexpense = async () => {
        const result1 = await axios.get(
          "http://localhost:8000/api/user/totalexpense",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setExpense(result1.data);
      };

      totalexpense();
    }
  });

  return (
    <div className="w-[384px] h-[216px] bg-white rounded-xl flex flex-col">
      <div className=" h-[56px] border-b items-center flex pl-6 gap-2 border-[#E2E8F0]">
        <img src="/home/image3.png" className="w-2 h-2" alt="" />
        <div className="font-medium text-base">Your Expenses</div>
      </div>
      <div className="flex flex-col gap-4 px-6 py-5 h-[226px] w-[588px]">
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-4xl">-{expense} ₮</div>
          <div className="text-[#64748B] text-lg font-light">
            Your Income Amount
          </div>
        </div>
        <div className="flex gap-2">
          <img src="/home/image2.png" className="w-6 h-6" alt="" />
          <div>32% from last month</div>
        </div>
      </div>
    </div>
  );
};
