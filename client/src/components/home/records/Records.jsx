"use client";

import { useEffect, useState } from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import axios from "axios";

export const Records = ({ open, handleOpen, handleClose }) => {
  const [all, setAll] = useState(true);

  const [newFilter, setNewFilter] = useState(true);

  const [Income, setIncome] = useState(false);

  const [expense, setExpense] = useState(false);

  const [data, setData] = useState([]);

  const [records, setRecords] = useState([]);

  const allBtnHandler = () => {
    setAll(true);
    setIncome(false);
    setExpense(false);
    if (newFilter) {
      setData(records.slice(0).reverse());
    } else {
      setData(records);
    }
  };

  const incomeBtnHandler = () => {
    setAll(false);
    setIncome(true);
    setExpense(false);
    const incomeData = [];
    records.map((el) => {
      if (el.income) {
        incomeData.push(el);
      }
    });
    if (newFilter) {
      setData(incomeData.slice(0).reverse());
    } else {
      setData(incomeData);
    }
  };

  const expenseBtnHandler = () => {
    setAll(false);
    setIncome(false);
    setExpense(true);
    const expenseData = [];
    records.map((el) => {
      if (el.expense) {
        expenseData.push(el);
      }
    });
    if (newFilter) {
      setData(expenseData.slice(0).reverse());
    } else {
      setData(expenseData);
    }
  };

  const filterHandler = (e) => {
    console.log(e.target.value);

    if (e.target.value == "Newest first") {
      setData(data.slice(0).reverse());
      setNewFilter(true);
    } else {
      setData(data.slice(0).reverse());
      setNewFilter(false);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const records = async () => {
        const result1 = await axios.get(
          "https://income-zkgv.onrender.com/user/records",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRecords(result1.data);
        setData(result1.data.slice(0).reverse());
      };
      records();
    }
  }, []);

  return (
    <div className="flex gap-6 my-6 justify-start">
      <LeftSide
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        allBtnHandler={allBtnHandler}
        incomeBtnHandler={incomeBtnHandler}
        expenseBtnHandler={expenseBtnHandler}
      />
      <RightSide
        all={all}
        Income={Income}
        expense={expense}
        data={data}
        filterHandler={filterHandler}
      />
    </div>
  );
};
