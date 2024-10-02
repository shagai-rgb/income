"use client";

import * as React from "react";
import Modal from "@mui/material/Modal";
import { Button } from "../Button";
import { IoEyeOff, IoEyeOffSharp } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { AddRecord } from "./AddRecord";
export const LeftSide = ({ open, handleOpen, handleClose }) => {
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
            onClick={() => {
              handleOpen();
            }}
            text={"+ Add"}
          />
          <div>
            <Modal open={open} onClose={handleClose}>
              <AddRecord
                handleClose={() => {
                  handleClose();
                }}
              />
            </Modal>
          </div>
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
