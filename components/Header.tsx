"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Text from "./Text";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full h-20 md:px-20 px-0 flex items-center justify-between">
      <Image src="/assets/rishiPRLOGO.png" alt="Logo" width={120} height={40} />
      <div className="mr-8">
        <Text text="Rishi Public Affairs & PR" loading={true} />
      </div>

      <a
        href="https://wa.me/+919305191704"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-purple-600 p-3 px-4 rounded-xl md:mr-10 mr-4 cursor-pointer hover:scale-105 duration-300 hover:bg-purple-700 hover:shadow-lg animate-pulse text-nowrap text-white font-semibold hover:animate-none">
          Hire me
        </button>
      </a>
    </div>
  );
};

export default Header;
