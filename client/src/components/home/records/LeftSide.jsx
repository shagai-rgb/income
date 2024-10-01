"use client";

import { Button } from "../Button";

export const LeftSide = () => {
  return (
    <div className="flex flex-col items-center w-[282px] h-screen bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
      <div className="w-[250px] flex flex-col mt-6 gap-6">
        <div className="font-semibold text-2xl">Records</div>
        <div className="h-8">
          <Button text={"+ Add"} />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered bg-[#F3F4F6] rounded-lg w-full h-[32px]"
        />
        <div className="flex flex-col gap-4 font-semibold text-base">
          Types
          <div className="flex flex-col text-base font-normal">
            <div className="flex flex-col ml-3">
              <div className="form-control">
                <label className="label cursor-pointer gap-2 flex justify-start">
                  <input type="checkbox" className="checkbox w-4 h-4" />
                  <span className="label-text">All</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-2 flex justify-start">
                  <input type="checkbox" className="checkbox w-4 h-4" />
                  <span className="label-text">Income</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-2 flex justify-start">
                  <input type="checkbox" className="checkbox w-4 h-4" />
                  <span className="label-text">Expense</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-base font-semibold h-8 flex justify-between">
            Category
            <button className="text-[#1F2937] opacity-20 font-normal">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
