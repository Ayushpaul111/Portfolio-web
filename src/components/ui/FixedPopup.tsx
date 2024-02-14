"use client";
import React from "react";
import logo from "../../assets/logo.png";

export function FixedPopup() {
  return (
    //<a href="/" target="_blank">
    <button className="!fixed bottom-4 text-stone-50 right-4 flex gap-1 pl-2 p-2 rounded-md items-center border border-blue-gray-50">
      <img
        width={128}
        height={128}
        className="w-5 h-5"
        alt="Material Tailwind"
        src={logo}
      />{" "}
      Something new is comming soon!
    </button>
    //</a>
  );
}
