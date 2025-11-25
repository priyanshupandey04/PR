"use client";

import Image from "next/image";
import React from "react";
import SplitText from "./SplitText";

type Props = {};

const PoliticalLogo = (props: Props) => {
  return (
    <div className="w-full  p-0.5">
      <div className="relative w-[100%] md:w-[80%] mx-auto  my-4 flex">
        <div>
          <Image
            src="/assets/indiaFlag.png"
            alt="India Flag"
            width={200}
            height={200}
            className="absolute left-44 md:left-56 top-14 md:top-40 scale-100  md:scale-150 "
          />
        </div>
        <div className="md:w-1/2 w-[40%] h-[35rem] ">
          <div className="grid grid-rows-4 h-full ">
            <div className="row-span-1 ">
              <Image
                src="/assets/BJP.png"
                alt="Logo"
                width={130}
                height={40}
                className="delay-100 scale-100 md:scale-100 w-32 h-32 md:w-40 md:h-40"
              />
            </div>
            <div className="row-span-1 flex flex-row-reverse ">
              <Image
                src="/assets/BSP.png"
                alt="Logo"
                width={130}
                height={100}
                className=" delay-300 scale-100 md:scale-100 w-32 h-32 md:w-40 md:h-40"
              />
            </div>
            <div className="row-span-1 flex ">
              <Image
                src="/assets/congress.png"
                alt="Logo"
                width={130}
                height={50}
                className="scale-90 md:scale-90  delay-700 w-32 h-32 md:w-40 md:h-40"
              />
            </div>
            <div className="row-span-1 flex-row-reverse flex">
              <Image
                src="/assets/samajwadi.png"
                alt="Logo"
                width={130}
                height={40}
                className="scale-90 md:scale-90  h-32 w-32 md:h-40 md:w-40 "
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-[60%] h-[35rem] flex justify-center items-center">
          <div className=" h-fit md:scale-200 mt-32 md:mt-0 ml-5 md:ml-0">
            <SplitText
              text="आपकी छवि, "
              className="text-3xl md:text-2xl   font-semibold text-center text-white"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.4}
              rootMargin="-100px"
              textAlign="center"
            />

            <SplitText
              text="हमारी ज़िम्मेदारी|"
              className="text-3xl md:text-2xl font-semibold text-center text-white"
              delay={200}
              duration={0.8}
              splitType="chars"
              threshold={0.4}
              textAlign="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticalLogo;
