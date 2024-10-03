"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const RightSide = () => {
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
    <div className="mt-2 w-[894px] flex flex-col gap-5">
      <div className="flex justify-between items-center h-12">
        <div className="flex gap-4 items-center ">
          <button className="btn btn-square btn-sm bg-[#E5E7EB] ">
            <IoIosArrowBack className="w-4 h-4" />
          </button>
          <div className="font-normal text-base">Last 30 Days</div>
          <button className="btn btn-square btn-sm bg-[#E5E7EB]">
            <IoIosArrowForward className="w-4 h-4" />
          </button>
        </div>
        <select className="select select-bordered w-[180px] h-12 text-base font-semibold bg-[#F9FAFB]">
          <option>Newest first</option>
          <option>Oldest first</option>
        </select>
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-base">Today</div>
        <div className="flex flex-col gap-3">
          {data
            .slice(0)
            .reverse()
            .map((el) => {
              const { category, income, expense, date } = el;

              if (income) {
                return (
                  <div className="bg-white h-[64px] rounded-xl px-6 flex justify-between items-center">
                    <div className="flex">
                      <img
                        src={`/category/${category}.png`}
                        className="h-10 w-10"
                        alt=""
                      />
                      <div className="flex flex-col ml-4">
                        <div className="font-normal text-base">{category}</div>
                        <div className="text-[#6B7280] text-xs font-normal">
                          {date}
                        </div>
                      </div>
                    </div>
                    <div className="font-normal text-base text-[#84CC16] mr-0">
                      {income}₮
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="bg-white h-[64px] rounded-xl px-6 flex justify-between items-center">
                    <div className="flex">
                      <img
                        src={`/category/${category}.png`}
                        className="h-10 w-10"
                        alt=""
                      />
                      <div className="flex flex-col ml-4">
                        <div className="font-normal text-base">{category}</div>
                        <div className="text-[#6B7280] text-xs font-normal">
                          {date}
                        </div>
                      </div>
                    </div>
                    <div className="font-normal text-base text-[#F54949] mr-0">
                      -{expense}₮
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-base">Yesterday</div>
        <div className="flex flex-col gap-3">
          {data
            .slice(0)
            .reverse()
            .map((el) => {
              const { category, income, expense, date } = el;

              if (income) {
                return (
                  <div className="bg-white h-[64px] rounded-xl px-6 flex justify-between items-center">
                    <div className="flex">
                      <img
                        src={`/category/${category}.png`}
                        className="h-10 w-10"
                        alt=""
                      />
                      <div className="flex flex-col ml-4">
                        <div className="font-normal text-base">{category}</div>
                        <div className="text-[#6B7280] text-xs font-normal">
                          {date}
                        </div>
                      </div>
                    </div>
                    <div className="font-normal text-base text-[#84CC16] mr-0">
                      {income}₮
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="bg-white h-[64px] rounded-xl px-6 flex justify-between items-center">
                    <div className="flex">
                      <img
                        src={`/category/${category}.png`}
                        className="h-10 w-10"
                        alt=""
                      />
                      <div className="flex flex-col ml-4">
                        <div className="font-normal text-base">{category}</div>
                        <div className="text-[#6B7280] text-xs font-normal">
                          {date}
                        </div>
                      </div>
                    </div>
                    <div className="font-normal text-base text-[#F54949] mr-0">
                      -{expense}₮
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};
