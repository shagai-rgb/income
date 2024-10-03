"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export const LastRecords = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const records = async () => {
        const result1 = await axios.get(
          "http://localhost:8000/api/user/records",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(result1.data);
      };
      records();
    }
  }, []);

  return (
    <div className="w-full flex bg-white flex-col rounded-xl">
      <div className="h-[56px] flex items-center pl-6 font-semibold text-base border-b border-[#E2E8F0]">
        Last Records
      </div>
      {data
        .slice(0)
        .reverse()
        .map((el, i) => {
          if (i >= 4) {
            return;
          }

          if (el.income) {
            return (
              <div className="h-20 mx-6 flex items-center justify-between">
                <div className="gap-4 flex items-center">
                  <img
                    src={`/category/${el.category}.png`}
                    className="h-10 w-10"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <div className="font-normal text-base">{el.category}</div>
                    <div className="font-normal text-xs text-[#6B7280]">
                      3 hours ago
                    </div>
                  </div>
                </div>
                <div className="font-normal text-base text-[#84CC16]">
                  {el.income}₮
                </div>
              </div>
            );
          } else {
            return (
              <div className="h-20 mx-6 flex items-center justify-between">
                <div className="gap-4 flex items-center">
                  <img
                    src={`/category/${el.category}.png`}
                    className="h-10 w-10"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <div className="font-normal text-base">{el.category}</div>
                    <div className="font-normal text-xs text-[#6B7280]">
                      3 hours ago
                    </div>
                  </div>
                </div>
                <div className="font-normal text-base text-[#F54949]">
                  -{el.expense}₮
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};
