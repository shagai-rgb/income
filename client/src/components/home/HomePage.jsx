"use client";
import { Dashboard } from "@/components/home/Dashboard";
import { Header } from "@/components/home/Header";
import { useState } from "react";
import { Records } from "./records/Records";

export const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [dash, setDash] = useState(true);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const buttonBoard = () => {
    setDash(true);
  };
  const buttonRecords = () => {
    setDash(false);
  };

  return (
    <div className="w-full relative flex flex-col items-center bg-[#F3F4F6]">
      {/* <Header
        handleOpen={() => {
          handleOpen();
        }}
        buttonBoard={() => {
          buttonBoard();
        }}
        buttonRecords={() => {
          buttonRecords();
        }}
      /> */}

      {/* {dash ? (
        <Dashboard />
      ) : (
        <Records
          open={open}
          handleOpen={() => {
            handleOpen();
          }}
          handleClose={() => {
            handleClose();
          }}
        />
      )} */}
    </div>
  );
};
