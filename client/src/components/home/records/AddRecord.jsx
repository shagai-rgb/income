"use client";

import { AddLeftSide } from "./addrecord/AddLeftSide";
import { AddRightSide } from "./addrecord/AddRightSide";

export const AddRecord = ({ handleClose }) => {
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
        <AddLeftSide />
        <AddRightSide />
      </div>
    </div>
  );
};
