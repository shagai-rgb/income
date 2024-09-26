"use client";

import { Card } from "./Card";
import { ExpenseCard } from "./ExpenseCard";
import { ExpenseChart } from "./ExpenseChart";
import { IncomeBar } from "./IncomeBar";
import { IncomeCard } from "./IncomeCard";

export const Dashboard = () => {
  return (
    <div className="flex flex-col mt-8 gap-6">
      <div className="w-[1200px] flex gap-6">
        <Card />
        <IncomeCard />
        <ExpenseCard />
      </div>
      <div className="w-[1200px] flex gap-6">
        <IncomeBar />
        <ExpenseChart />
      </div>
    </div>
  );
};
