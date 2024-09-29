"use client";
import { useEffect } from "react";
import EmblaCarousel from "./components/carousello";

import PageWrapper from "./components/page-wrapper";

export default function Home() {
  return (
    <main>
      <div>
        <EmblaCarousel />
      </div>
      <div className="mt-20">
        <PageWrapper>
          <div className="sm:flex sm:items-center sm:justify-center ">
            <h1 className=" text-2xl text-center sm:text-4xl text-rose-600 mb-10">
              Unlock Your Future with Tuition-Free Education in Germany!
            </h1>
          </div>
        </PageWrapper>
        <PageWrapper>
          <div className="flex items-center justify-center px-10 sm:px-20 my-5 text-white text-xl sm:text-2xl text-center">
            Are you dreaming of pursuing a world-class education without the
            burden of tuition fees? Germany offers exceptional opportunities for
            international students, and Xcel Educational Consult is here to
            guide you every step of the way!
          </div>
        </PageWrapper>
        <PageWrapper>
          <div className="flex items-center justify-center my-5">
            <h2 className="text-2xl sm:text-4xl text-rose-600 my-5 sm:my-10">
              Why Choose Germany?
            </h2>
          </div>
        </PageWrapper>

        <div className="flex items-center justify-center">
          <div className="text-white text-xl px-4 sm:px-0 sm:text-2xl">
            <PageWrapper>
              <li>No Tuition Fees at public universities</li>
            </PageWrapper>
            <PageWrapper>
              <li>Globally Recognized Degrees across diverse fields</li>
            </PageWrapper>
            <PageWrapper>
              <li>
                Innovative Learning Environment with state-of-the-art facilities
              </li>
            </PageWrapper>
            <PageWrapper>
              <li>
                Vibrant Student Life in one of the worlds most dynamic countries
              </li>
            </PageWrapper>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <PageWrapper>
            {" "}
            <h1 className="text-2xl sm:text-4xl text-rose-600 my-5 sm:my-10">
              Start Your Journey Today!
            </h1>
          </PageWrapper>
        </div>
        <PageWrapper>
          <div className="flex items-center justify-center px-5 sm:px-20 my-2 sm:my-5 text-white text-center text-xl sm:text-2xl">
            Do not miss out on the opportunity to study in Germany without the
            burden of tuition fees. Book your free initial consultation now and
            take the first step towards your future!
          </div>
        </PageWrapper>
      </div>
    </main>
  );
}
