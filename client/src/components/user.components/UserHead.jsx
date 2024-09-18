import React from "react";

export const UserHead = ({ text }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="font-semibold text-2xl">{text.head}</div>
      <div className="font-normal text-base">{text.title}</div>
    </div>
  );
};
