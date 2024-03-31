"use client";
import React from "react";
import logo from "../../assets/logo.png";

export function FixedPopup() {
  return (
    <a
      href="http://shop.ayushpaul.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="!fixed bottom-4 text-stone-50 right-4 flex gap-1 pl-2 p-2 rounded-md items-center border border-blue-gray-50">
        <img
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src={logo}
        />{" "}
        Want a free cookie?
      </button>
    </a>
  );
}
