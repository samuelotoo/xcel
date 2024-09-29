"use client";

import { useState } from "react";
import Link from "next/link";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left ">
      <button
        className="  inline-flex w-full justify-center  text-white hover:bg-white hover:text-black rounded-lg "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Our Services
        {!isOpen ? (
          <AiFillCaretDown className="h-8" />
        ) : (
          <AiFillCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="bg-white bg-opacity-40 text-black absolute top-14 rounded-lg p-2 w-[200px]">
          <div className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1">
            <Link href="/pconsult" className=" text-black hover:text-black">
              Personalized Consultation
            </Link>
          </div>
          <div className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1">
            <Link href="/unisec" className=" text-black hover:text-black">
              University Selection
            </Link>
          </div>
          <div className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1">
            <Link href="/appsup" className=" text-black hover:text-black">
              Application Support
            </Link>
          </div>
          <div className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1">
            <Link href="/visa" className=" text-black hover:text-black">
              Visa Assistance
            </Link>
          </div>
          <div className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1">
            <Link href="/blocked" className=" text-black hover:text-black">
              Blocked Account Consultation
            </Link>
          </div>
          <div className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1">
            <Link href="/departure" className=" text-black hover:text-black">
              Pre-Departure Guidance
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
