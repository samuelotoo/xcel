import Image from "next/image";

import React from "react";
import PageWrapper from "../components/page-wrapper";

export default function AboutUs() {
  return (
    <main className="">
      <div>
        <div className="absolute flex items-center justify-center right-0 left-0 sm:inset-0 pt-36 text-white text-5xl">
          About Us
        </div>

        <PageWrapper>
          <div className="absolute  pl-10 pt-5 flex items-center ">
            <Image
              src="https://gdurl.com/9Z9v"
              width={100}
              height={50}
              className=" w-24 sm:w-36 "
              alt="logo"
            />
          </div>
        </PageWrapper>
        <PageWrapper>
          {" "}
          <Image
            src="https://gdurl.com/phjM"
            width={500}
            height={500}
            className="w-full md:h-[550px]"
            alt="About Us"
          />
        </PageWrapper>
      </div>
      <div className="mt-20">
        <div className="flex items-center justify-center ">
          <PageWrapper>
            {" "}
            <h1 className="text-4xl text-rose-600 mb-10">Who We are</h1>
          </PageWrapper>
        </div>
        <PageWrapper>
          <div className="flex items-center justify-center px-5 sm:px-20 my-5 text-white text-2xl text-center">
            Xcel Educational Consult is a twenty-first-century international
            educational agency with a vision to make world-class education
            accessible to Africans. Having been established by a seasoned
            international education expert with educational insight in German
            education system, the major aim of Xcel Educational Consult is to
            demystify the perceived hurdles in accessing education abroad.
          </div>
        </PageWrapper>

        <div className="sm:flex mt-10">
          <div className="py-4">
            <PageWrapper>
              <div className=" flex items-center justify-center">
                <p className="text-xl uppercase font-bold text-rose-600">
                  MISSION
                </p>
              </div>
            </PageWrapper>
            <PageWrapper>
              <div className="overflow-visible py-2">
                <div className="flex items-center justify-center px-5 sm:px-20 my-5 text-white text-2xl text-center">
                  Xcel Educational Consult has a mission to provide a top-notch,
                  honest and comprehensive consultation to equip qualified
                  candidates seeking entry abroad for studies.
                </div>
              </div>
            </PageWrapper>
          </div>
          <div className="py-4">
            <PageWrapper>
              <div className="flex items-center justify-center">
                <p className="text-xl uppercase font-bold text-rose-600">
                  CORE VALUES
                </p>
              </div>
            </PageWrapper>
            <PageWrapper>
              <div className="overflow-visible py-2">
                <div className="flex items-center justify-center px-5 sm:px-20 my-5 text-white text-2xl text-center">
                  We are dedicated to our works, transparent, with optimum
                  customer care services and above all with high integrity and a
                  decade expertise in the industry.
                </div>
              </div>
            </PageWrapper>
          </div>
        </div>
        <div className="mt-5">
          <PageWrapper>
            {" "}
            <div className="flex items-center justify-center ">
              <h1 className=" text-2xl sm:text-4xl text-rose-600 mb-10 text-center">
                Why Choose Xcel Educational Consult?
              </h1>
            </div>
          </PageWrapper>

          <div className="flex items-center justify-center px-20 my-5 text-white text-2xl ">
            <div>
              <div className="mb-5">
                <PageWrapper>
                  <span className="uppercase font-bold text-rose-600">
                    Expert Advisors:
                  </span>
                </PageWrapper>
                <PageWrapper>
                  {" "}
                  Our team boasts years of experience with in-depth knowledge of
                  the German education system.
                </PageWrapper>
              </div>
              <div className="mb-5">
                <PageWrapper>
                  <span className="uppercase font-bold text-rose-600">
                    Proven Success:
                  </span>
                </PageWrapper>
                <PageWrapper></PageWrapper> We have helped countless students
                achieve their dream of studying in Germany.
              </div>
              <div className="mb-5">
                <PageWrapper>
                  <span className="uppercase font-bold text-rose-600">
                    Affordable Services:
                  </span>
                </PageWrapper>
                <PageWrapper>
                  {" "}
                  Quality guidance that offers excellent value for your
                  investment.
                </PageWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
