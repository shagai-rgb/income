import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div>{children}</div>
      <div className="bg-[#0166FF] right-0 fixed h-screen w-[708px]"></div>
    </div>
  );
};

export default layout;
