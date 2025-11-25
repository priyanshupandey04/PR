import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-black/90  w-[100vw]">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
