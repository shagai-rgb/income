"use client";
import React from "react";
export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 z-50 absolute inset-0 bg-white">
      <img className="w-[170px] h-[64px]" src="/user/image.png" alt="" />
      <div className="flex flex-col items-center gap-4">
        <div className="loading loading-spinner text-primary"></div>
        <div className="font-semibold text-bases">Түр хүлээнэ үү...</div>
      </div>
    </div>
  );
};
