"use client";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const RightSide = () => {
  const dataToday = [
    {
      icon: "/category/house.png",
      category: "Lending & Renting",
      balance: "1,000",
      time: "14:00",
    },
    {
      icon: "/category/house.png",
      category: "Lending & Renting",
      balance: "1,000",
      time: "14:00",
    },
    {
      icon: "/category/food.png",
      category: "Food & Drinks",
      balance: "1,000",
      time: "14:00",
    },
    {
      icon: "/category/food.png",
      category: "Food & Drinks",
      balance: "1,000",
      time: "14:00",
    },
    {
      icon: "/category/food.png",
      category: "Food & Drinks",
      balance: "1,000",
      time: "14:00",
    },
    {
      icon: "/category/food.png",
      category: "Food & Drinks",
      balance: "1,000",
      time: "14:00",
    },
  ];
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
          {dataToday.map((el) => {
            const { icon, category, balance, time } = el;
            return (
              <div className="bg-white h-[64px] rounded-xl px-6 flex justify-between items-center">
                <div className="flex">
                  <img src={icon} alt="" />
                  <div className="flex flex-col ml-4">
                    <div className="font-normal text-base">{category}</div>
                    <div className="text-[#6B7280] text-xs font-normal">
                      {time}
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-base mr-0">{balance}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-base">Yesterday</div>
        <div className="flex flex-col gap-3">
          {dataToday.map((el) => {
            const { icon, category, balance, time } = el;
            return (
              <div className="bg-white h-[64px] rounded-xl px-6 flex justify-between items-center">
                <div className="flex">
                  <img src={icon} alt="" />
                  <div className="flex flex-col ml-4">
                    <div className="font-normal text-base">{category}</div>
                    <div className="text-[#6B7280] text-xs font-normal">
                      {time}
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-base mr-0">{balance}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
