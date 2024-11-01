"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export const IncomeCard = () => {
  const [income, setIncome] = useState(0);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const totalincome = async () => {
        const result1 = await axios.get(
          "https://income-zkgv.onrender.com/user/totalincome",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setIncome(result1.data);
      };
      totalincome();
    }
  });

  return (
    <div className="w-[384px] h-[216px] bg-white rounded-xl flex flex-col">
      <div className=" h-[56px] border-b items-center flex pl-6 gap-2 border-[#E2E8F0]">
        <img src="/home/image.png" className="w-2 h-2" alt="" />
        <div className="font-medium text-base">Your Income</div>
      </div>
      <div className="h-[160px] flex flex-col gap-4 pl-6 pt-5">
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-4xl">{income} ₮</div>
          <div className="text-[#64748B] text-lg font-light">
            Your Income Amount
          </div>
        </div>
        <div className="flex gap-2">
          <img src="/home/image1.png" className="w-6 h-6" alt="" />
          <div>32% from last month</div>
        </div>
      </div>
    </div>
  );
};
