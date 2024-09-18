import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-[50%] flex justify-center items-center h-screen">
        {children}
      </div>
      <div className="bg-[#0166FF] right-0 fixed h-screen w-1/2"></div>
    </div>
  );
};

export default layout;
