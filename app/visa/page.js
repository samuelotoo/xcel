import Image from "next/image";
import React from "react";
import visa from "../components/visa.png";

import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";

export default function Visa() {
  return (
    <main>
      <div className="flex flex-col items-center ">
        <div className="relative w-full sm:h-[470px] 2xl:h-[800px]">
          <div className="absolute -z-20 w-full">
            <Image
              src={visa}
              width={200}
              height={200}
              className="w-full h-[525px] 2xl:h-[890px] opacity-70"
              alt="University Selection"
            />
          </div>
          <div className="mt-28 2xl:mt-80 sm:mt-60 ml-10 sm:ml-20">
            <div className="flex items-start mb-5">
              <h1 className="text-2xl md:text-4xl text-white ">
                {" "}
                Visa Assistance{" "}
              </h1>
            </div>
            <div className="flex  text-white sm:text-2xl sm:w-1/2">
              Expert navigation through the visa process for a hassle-free
              experience.
            </div>
            <div className="w-40">
              <Link href="https://wa.me/4917657979008?text=Hello,%20how%20may%20we%20help%20you?">
                {" "}
                <button className="flex items-baseline justify-center gap-2 text-white w-40 h-10 mt-5 mb-10 text-lg bg-red-600 hover:bg-red-500 rounded-full ">
                  Talk to Us <SiWhatsapp size={22} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
