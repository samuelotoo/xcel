import Image from "next/image";

import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import PageWrapper from "../components/page-wrapper";
import contact from "../contact/contact.png";

export default function ContactUs() {
  return (
    <main className="mb-5 relative">
      <div>
        <div className="md:flex w-full">
          <div className="md:w-1/2 ">
            <div>
              <PageWrapper>
                <div className="absolute flex items-center justify-center text-black ml-32 mt-28 md:ml-44 2xl:ml-80 md:mt-20 text-3xl md:text-5xl  2xl:text-7xl">
                  Contact Us
                </div>
              </PageWrapper>
            </div>
            <div className="w-full md:h-[460px] 2xl:h-[800px]">
              <PageWrapper>
                <Image
                  src={contact}
                  width={500}
                  height={500}
                  className="w-full md:h-[460px]  2xl:h-[700px] md:px-4"
                  alt="contact us"
                />
              </PageWrapper>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="m-5 bg-white/20 h-[300px] md:h-[400px]  2xl:h-[700px] rounded-lg">
              <PageWrapper>
                <div className="text-xl text-center pt-20 2xl:pt-52 uppercase font-bold text-rose-600 flex items-center justify-center">
                  Contact Xcel Educational Consult:
                </div>
              </PageWrapper>
              <PageWrapper>
                <div className="flex items-center justify-center my-5 text-white gap-4 text-2xl">
                  <MdAttachEmail className=" text-blue-400" />{" "}
                  uniapplication@proton.me
                </div>
              </PageWrapper>
              <PageWrapper>
                <div className="flex items-center justify-center my-5 text-white gap-4 text-2xl">
                  <IoLogoWhatsapp className=" text-green-800" /> +491632054501
                </div>
              </PageWrapper>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
