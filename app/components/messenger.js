import Link from "next/link";
import React from "react";
import { SiWhatsapp } from "react-icons/si";

export default function Messenger() {
  return (
    <Link href="https://wa.me/4917657979008?text=Hello,%20how%20may%20we%20help%20you?">
      <div className="fixed  ml-[82px]   inset-2/3 lg:inset-96 xl:inset-[700px] lg:ml-[700px] xl:ml-[1000px] sm:mt-[100px] mt-[100px] sm:w-20 w-14 sm:h-20 h-14 rounded-full bg-emerald-500 flex items-center justify-center cursor-pointer">
        <SiWhatsapp className="text-white" size={40} />
      </div>
    </Link>
  );
}
