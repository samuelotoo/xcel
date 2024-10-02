"use client";
import Image from "next/image";
import Link from "next/link";
import xcel from "../components/xcel.avif";
import Dropdown from "./dropdown";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:gap-0 -mr-20 md:-mr-0 h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={xcel}
                  alt="Xcel logo"
                  width={150}
                  height={150}
                  quality={100}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                About Us
              </Link>
              <Dropdown />
              <Link
                href="/contact"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white  "
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6L12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-white block  hover:bg-white hover:text-black rounded-lg p-2"
                onClick={toggleNavbar}
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                className="text-white block  hover:bg-white hover:text-black rounded-lg p-2"
                onClick={toggleNavbar}
              >
                About Us
              </Link>
              <div>
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
                    <div className="bg-white bg-opacity-40 text-black absolute -top-24 left-32 rounded-lg p-2 w-[200px]">
                      <div
                        className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1"
                        onClick={() => setIsOpen((prev) => !prev)}
                      >
                        <Link
                          href="/pconsult"
                          className=" text-black hover:text-black"
                          onClick={toggleNavbar}
                        >
                          Personalized Consultation
                        </Link>
                      </div>
                      <div
                        className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1"
                        onClick={() => setIsOpen((prev) => !prev)}
                      >
                        <Link
                          href="/unisec"
                          className=" text-black hover:text-black"
                          onClick={toggleNavbar}
                        >
                          University Selection
                        </Link>
                      </div>
                      <div
                        className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1"
                        onClick={() => setIsOpen((prev) => !prev)}
                      >
                        <Link
                          href="/appsup"
                          className=" text-black hover:text-black"
                          onClick={toggleNavbar}
                        >
                          Application Support
                        </Link>
                      </div>
                      <div
                        className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1"
                        onClick={() => setIsOpen((prev) => !prev)}
                      >
                        <Link
                          href="/visa"
                          className=" text-black hover:text-black"
                          onClick={toggleNavbar}
                        >
                          Visa Assistance
                        </Link>
                      </div>
                      <div
                        className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1"
                        onClick={() => setIsOpen((prev) => !prev)}
                      >
                        <Link
                          href="/blocked"
                          className=" text-black hover:text-black"
                          onClick={toggleNavbar}
                        >
                          Blocked Account Consultation
                        </Link>
                      </div>
                      <div
                        className="text-[14px] w-full justify-center hover:bg-white hover:border-l-black hover:border-l-2 rounded-r-lg p-1"
                        onClick={() => setIsOpen((prev) => !prev)}
                      >
                        <Link
                          href="/departure"
                          className=" text-black hover:text-black"
                          onClick={toggleNavbar}
                        >
                          Pre-Departure Guidance
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <Link
                href="/contact"
                className="text-white block  hover:bg-white hover:text-black rounded-lg p-2"
                onClick={toggleNavbar}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
