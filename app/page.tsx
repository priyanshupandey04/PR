"use client";

import DarkVeil from "@/components/DarkVeil";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative bg-[#010103] md:bg-transparent  w-full">
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(80,120,255,0.35) 0%, rgba(0,0,0,0) 100%)",
          }}
          className="absolute -right-32 md:right-40 w-[500px] h-[500px] md:top-20 top-16 rounded-full blur-3xl  md:z-0 md:hidden"
        />

        <div className="hidden md:block absolute md:w-[100%] md:h-[100%] w-[100rem] h-[100rem]  -z-20">
          <DarkVeil />
        </div>
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
