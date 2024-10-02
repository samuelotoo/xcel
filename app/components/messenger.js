import Link from "next/link";
import React from "react";
import { SiWhatsapp } from "react-icons/si";

export default function Messenger() {
  return (
    <Link href="https://wa.me/4917657979008?text=Hello,%20can%20get%20more%20info%20please?">
      <div className="fixed  ml-[60px]   inset-2/3 lg:inset-96 2xl:inset-[700px] lg:ml-[700px] 2xl:ml-[1000px] sm:mt-[100px] mt-[100px] md:w-20 w-10 md:h-20 h-10 rounded-full bg-emerald-500 flex items-center justify-center cursor-pointer">
        <SiWhatsapp className="text-white w-5 sm:w-12  " size={40} />
      </div>
    </Link>
  );
}
