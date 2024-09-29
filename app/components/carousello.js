"use client";

import React from "react";
import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import PageWrapper from "./page-wrapper";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla max-w-full ">
      <div className="embla__viewport max-w-full " ref={emblaRef}>
        <div className="embla__container md:h-[390px] lg:h-full">
          <div className="embla__slide flex items-center justify-center">
            {" "}
            <Image
              src="https://gdurl.com/5mea"
              width={300}
              height={300}
              className="w-full md:h-[390px] lg:h-[590px]"
              alt=" Personalized Consultation"
            />
            <div className="absolute bg-black/30 md:w-[800px] sm:w-[600] w-[350px] rounded-lg shadow-5-strong">
              <div className=" flex items-center justify-center">
                <PageWrapper>
                  <label className="text-gray-100 text-[20px] md:text-[35px] shadow-dark-strong ">
                    Personalized Consultation
                  </label>
                </PageWrapper>
              </div>
              <div className=" text-gray-50 text-[13px] md:text-[13px] md:text-20  text-center shadow-2xl pl-4 pb-2">
                <div className="flex items-center justify-center ">
                  <PageWrapper>
                    {" "}
                    Tailored services aligned with your academic background and
                    career aspirations.
                  </PageWrapper>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center">
            {" "}
            <Image
              src="https://gdurl.com/3EuO"
              width={200}
              height={100}
              className="w-full  md:h-[390px] lg:h-[590px]"
              alt=" University Selection"
            />
            <div className="absolute bg-black/30 md:w-[800px] sm:w-[600] w-[350px]   rounded-lg shadow-5-strong ">
              <div className=" flex items-center justify-center">
                <PageWrapper>
                  <label className="text-gray-100 text-[20px] md:text-[35px] shadow-dark-strong ">
                    University Selection
                  </label>
                </PageWrapper>
              </div>
              <div className="text-gray-50 text-[13px] md:text-20 text-center shadow-2xl pl-4 pb-2">
                <label className="flex items-center justify-center">
                  <PageWrapper>
                    {" "}
                    Assistance in choosing the right university and program for
                    you.
                  </PageWrapper>
                </label>
              </div>
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center">
            {" "}
            <Image
              src="https://gdurl.com/fBsV"
              width={200}
              height={100}
              className="w-full  md:h-[390px] lg:h-[590px]"
              alt="Application Support"
            />
            <div className="absolute bg-black/30 md:w-[800px] sm:w-[600] w-[350px]   rounded-lg shadow-5-strong">
              <div className=" flex items-center justify-center">
                <PageWrapper>
                  <label className="text-gray-100 text-[20px] md:text-[35px] shadow-dark-strong ">
                    Application Support
                  </label>
                </PageWrapper>
              </div>
              <div className="text-gray-50 text-[13px] md:text-20 text-center shadow-2xl pl-4 pb-2">
                <label className="flex items-center justify-center">
                  <PageWrapper>
                    Comprehensive guidance from document preparation to
                    submission, ensuring your application stands out.
                  </PageWrapper>
                </label>
              </div>
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center">
            {" "}
            <Image
              src="https://gdurl.com/Z4w5"
              width={200}
              height={200}
              className="w-full  md:h-[390px] lg:h-[590px]"
              alt="Visa Assistance"
            />
            <div className="absolute bg-black/30 md:w-[800px] sm:w-[600] w-[350px]   rounded-lg shadow-5-strong">
              <div className=" flex items-center justify-center">
                <label className="text-gray-100 text-[20px] md:text-[35px] shadow-dark-strong ">
                  <PageWrapper>Visa Assistance</PageWrapper>
                </label>
              </div>
              <div className="text-gray-50 text-[13px] md:text-20 text-center shadow-2xl pl-4 pb-2">
                <label className="flex items-center justify-center">
                  <PageWrapper>
                    Expert navigation through the visa process for a hassle-free
                    experience.
                  </PageWrapper>
                </label>
              </div>
            </div>
          </div>

          <div className="embla__slide flex items-center justify-center">
            {" "}
            <Image
              src="https://gdurl.com/lY93"
              width={200}
              height={200}
              className="w-full  md:h-[390px] lg:h-[590px]"
              alt="Blocked Account Consultation"
            />
            <div className="absolute bg-black/30 md:w-[800px] sm:w-[600] w-[350px]   rounded-lg shadow-5-strong">
              <div className=" flex items-center justify-center">
                <label className="text-gray-100 text-[20px] md:text-[35px] shadow-dark-strong ">
                  <PageWrapper>Blocked Account Consultation</PageWrapper>
                </label>
              </div>
              <div className="text-gray-50 text-[13px] md:text-20 text-center shadow-2xl pl-4 pb-2">
                <label className="flex items-center justify-center">
                  <PageWrapper>
                    Guidance on setting up your Blocked Account, a crucial step
                    for financial preparedness.
                  </PageWrapper>
                </label>
              </div>
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center">
            {" "}
            <Image
              src="https://gdurl.com/tDp0"
              width={200}
              height={200}
              className="w-full  md:h-[390px] lg:h-[590px]"
              alt="Pre-Departure Guidance"
            />
            <div className="absolute bg-black/30 md:w-[800px] sm:w-[600] w-[350px]   rounded-lg shadow-5-strong">
              <div className=" flex items-center justify-center">
                <label className="text-gray-100 text-[20px] md:text-[35px] shadow-dark-strong ">
                  <PageWrapper>Pre-Departure Guidance</PageWrapper>
                </label>
              </div>
              <div className="text-gray-50 text-[13px] md:text-20 text-center shadow-2xl pl-4 pb-2">
                <label className="flex items-center justify-center">
                  <PageWrapper>
                    Essential tips on accommodation, cultural integration, and
                    more to ensure a smooth transition.
                  </PageWrapper>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[500px] sm:bottom-0 inset-0 flex items-center justify-between p-4 text-white">
          <AiOutlineLeft
            className="embla__prev p-1 rounded-full shadow bg-black/50 hover:bg-black"
            onClick={scrollPrev}
            size={40}
          />
          <AiOutlineRight
            className="embla__next p-1 rounded-full shadow bg-black/50 hover:bg-black"
            onClick={scrollNext}
            size={40}
          />
        </div>
      </div>
    </div>
  );
}
