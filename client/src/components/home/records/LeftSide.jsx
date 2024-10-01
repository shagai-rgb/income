"use client";

import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "../Button";
import { IoEyeOff, IoEyeOffSharp } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
export const LeftSide = () => {
  const category = [
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Communication, PC",
    "Financial expenses",
    "Investments",
    "Income",
    "Others",
  ];
  return (
    <div className="flex flex-col items-center w-[282px] bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
      <div className="w-[250px] flex flex-col mt-6 gap-6">
        <div className="font-semibold text-2xl">Records</div>
        <div className="h-8">
          <Button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            text={"+ Add"}
          />
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-0  w-[792px] max-w-[792px] max-h-[512px] h-[512px]">
              <div className=" flex h-[68px] justify-between items-center border-b px-6 border-[#E2E8F0]">
                <div className="font-bold text-xl">Add Record</div>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm text-base btn-circle btn-ghost ">
                    ✕
                  </button>
                </form>
              </div>
              <div className="flex">
                <div className="flex w-[444px] flex-col gap-5 p-6">
                  <div className="bg-[#F3F4F6] rounded-full w-[348px] h-10 items-center justify-between flex">
                    <div className="w-[172px] h-10 bg-[#0166FF] text-white cursor-pointer rounded-full flex items-center justify-center">
                      Expense
                    </div>
                    <div className="w-[172px] h-10  rounded-full flex items-center cursor-pointer justify-center">
                      Income
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 w-[348px] h-[78px] ">
                    <div className="flex flex-col bg-[#F3F4F6] rounded-lg border border-[#D1D5DB] py-3 px-4">
                      <div className="font-normal text-base">Amount</div>
                      <input
                        type="number"
                        placeholder="₮ 000.00"
                        className="input input-ghost w-full max-w-xs bg-[#F3F4F6] h-7"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="font-normal text-base">Categorys</div>
                      <select className="select select-bordered w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB]">
                        <option disabled selected>
                          choose
                        </option>
                        <option>Food & Drinks</option>
                        <option>Shopping</option>
                      </select>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="font-normal text-base">
                          Date
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                              <DatePicker label="Basic date picker" />
                            </DemoContainer>
                          </LocalizationProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
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
          <div className="ml-3 flex flex-col gap-3">
            {category.map((el) => {
              return (
                <label className="swap relative flex justify-start items-center">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" />
                  <div className="swap-on absolute items-center flex">
                    <IoEyeOff className="text-[#94A3B8] w-5 h-5" />
                  </div>
                  <div className="swap-off absolute items-center flex">
                    <IoMdEye className="w-5 h-5" />
                  </div>
                  <span className="font-normal text-base items-center ml-7">
                    {el}
                  </span>
                </label>
              );
            })}
          </div>
          <div className="font-normal flex ml-3 items-center gap-2 mb-6 cursor-pointer text-base">
            <img src="/home/imagePlus.png" className="w-5 h-5" alt="" /> Add
            Category
          </div>
        </div>
      </div>
    </div>
  );
};
