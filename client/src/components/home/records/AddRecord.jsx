"use client";

import { useState } from "react";
import { AddLeftSide } from "./addrecord/AddLeftSide";
import { AddRightSide } from "./addrecord/AddRightSide";
import axios from "axios";

export const AddRecord = ({ handleClose }) => {
  const [isExpense, setIsExpense] = useState(true);

  const [record, setRecord] = useState({
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  const handleExpenseClick = () => setIsExpense(true);
  const handleIncomeClick = () => setIsExpense(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecord({ ...record, [name]: value });
  };

  const handleSubmit = async () => {
    if (Object.values(record).some((element) => element === "")) {
      alert("input invalid");
      return;
    }
    const token = window.localStorage.getItem("token");
    const result = await axios.post(
      "http://localhost:8000/api/user/expense",
      record,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    handleClose();
    console.log(result.data);
  };
  return (
    <div className="modal-box z-30 p-0   w-[792px] max-w-[792px] max-h-[520px] h-[520px]">
      <div className=" flex h-[68px] justify-between items-center border-b px-6 border-[#E2E8F0]">
        <div className="font-bold text-xl">Add Record</div>

        <button
          onClick={() => {
            handleClose();
          }}
          className="btn btn-sm text-base btn-circle btn-ghost "
        >
          ✕
        </button>
      </div>
      <div className="flex">
        <AddLeftSide
          handleExpenseClick={handleExpenseClick}
          handleIncomeClick={handleIncomeClick}
          handleChange={handleChange}
          isExpense={isExpense}
          handleSubmit={handleSubmit}
        />
        <AddRightSide handleChange={handleChange} />
      </div>
    </div>
  );
};
