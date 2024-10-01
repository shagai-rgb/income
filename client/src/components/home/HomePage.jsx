"use client";
import { Dashboard } from "@/components/home/Dashboard";
import { Header } from "@/components/home/Header";
import { useState } from "react";
import { Records } from "./records/Records";

export const HomePage = () => {
  const [dash, setDash] = useState(true);
  const buttonBoard = () => {
    setDash(true);
  };
  const buttonRecords = () => {
    setDash(false);
  };

  return (
    <div className="w-full relative flex flex-col items-center bg-[#F3F4F6]">
      <Header
        buttonBoard={() => {
          buttonBoard();
        }}
        buttonRecords={() => {
          buttonRecords();
        }}
      />

      {/* {dash ? <Dashboard /> : <Records />} */}
      <Records />
    </div>
  );
};
