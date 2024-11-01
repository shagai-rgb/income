"use client";

import { useState } from "react";
import { AddLeftSide } from "./addrecord/AddLeftSide";
import { AddRightSide } from "./addrecord/AddRightSide";
import axios from "axios";

export const AddRecord = ({ handleClose }) => {
  const [isExpense, setIsExpense] = useState(true);
  const [loading, setLoading] = useState(false);
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
      alert("All fields are required.");
      return;
    }

    setLoading(true);
    const token = window.localStorage.getItem("token");
    const endpoint = isExpense
      ? "https://income-zkgv.onrender.com/user/expense"
      : "https://income-zkgv.onrender.com/user/income";

    try {
      const result = await axios.post(endpoint, record, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result.data);
      handleClose(); // Close the modal only on success
    } catch (error) {
      console.error("Error submitting record:", error);
      alert("Failed to submit record. Please try again.");
    } finally {
      setLoading(false); // Reset loading state after API call
    }
  };

  return (
    <div className="modal-box z-30 p-0 w-[792px] max-w-[792px] max-h-[520px] h-[520px]">
      <div className="flex h-[68px] justify-between items-center border-b px-6 border-[#E2E8F0]">
        <div className="font-bold text-xl">Add Record</div>
        <button
          onClick={handleClose}
          className="btn btn-sm text-base btn-circle btn-ghost"
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
          loading={loading}
          handleSubmit={handleSubmit}
        />
        <AddRightSide handleChange={handleChange} />
      </div>
    </div>
  );
};
