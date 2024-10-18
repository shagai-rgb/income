"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const RightSide = ({ data, filterHandler }) => {
  const date = new Date();

  // Get date components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");

  // Get time components
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Combine date and time
  const customDateTimeString = `${year}-${month}-${day}T${hours}:${minutes}`;
  const words = customDateTimeString.split("T");
  console.log(words[0]);

  data.map((el) => {
    console.log(el.date.split("T")[0].split("-"));
  });

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
        <select
          onChange={(e) => {
            filterHandler(e);
          }}
          defaultValue={"Newest first"}
          className="select select-bordered w-[180px] h-12 text-base font-semibold bg-[#F9FAFB]"
        >
          <option>Newest first</option>
          <option>Oldest first</option>
        </select>
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-base">Today</div>
        <div className="flex flex-col gap-3">
          {data.map((el) => {
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
