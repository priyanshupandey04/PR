import Image from "next/image";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GradientText from "./GradientText";
import { ChevronDown } from "lucide-react";

type Props = {};

const PoliticalServices = (props: Props) => {
  return (
    <div>
      <div className="mb-10 mt-10 ">
        <GradientText
          colors={[
            "#B54444FF",
            "#D6DAE1FF",
            "#A36464FF",
            "#FAFBFFFF",
            "#A85B5BFF",
          ]}
          animationSpeed={2}
          showBorder={false}
          className="custom-class"
        >
          <h1 className="text-3xl flex gap-4 justify-center items-center">
            Our Political Services
            <span>
              <ChevronDown className="text-white animate-bounce mt-3" />
            </span>
          </h1>
        </GradientText>
      </div>
      {/* Laptop / Tablet Section */}
      <div className="hidden md:flex flex-col md:flex-row">
        {/* Personal Branding */}
        <div className="h-[10rem] md:h-[35rem] bg-[#8E1616] rounded-xl p-4 w-full md:w-60 hover:w-[70rem] transition-all duration-1000 md:duration-500 hover:bg-[#450606] flex justify-center items-center group overflow-hidden cursor-pointer ">
          <div className="flex flex-col items-center gap-4 h-full w-full justify-center px-8 md:px-0">
            <div className="flex md:block gap-2">
              <div className="w-full md:flex justify-center items-center">
                <Image
                  src="/assets/personalBranding.png"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="w-[120px] md:w-[200px]"
                />
              </div>
              <h1 className="text-white text-xl font-semibold font-sans text-center group-hover:text-yellow-100  justify-center items-center flex mt-5">
                Personal Branding
              </h1>
            </div>

            <p className="hidden md:group-hover:block group-active:block transition-all duration-1000 delay-700 text-white text-center">
              Our personal branding service helps political leaders build a
              strong, credible, and influential public image. We craft
              compelling narratives, manage social media presence, enhance media
              visibility, and shape public perception to strengthen voter trust
              and recognition.
            </p>
          </div>
        </div>

        {/* Campaign Management */}
        <div className="h-[10rem] md:h-[35rem] bg-[#E8C999] rounded-xl p-4 w-full md:w-60 hover:w-[70rem] transition-all duration-500  hover:bg-[#685539] flex justify-center items-center group overflow-hidden cursor-pointer">
          <div className="flex flex-col items-center gap-4 h-full w-full justify-center">
            <div className="w-full flex justify-center items-center">
              <Image
                src="/assets/campaignManagement.png"
                alt="Logo"
                width={220}
                height={220}
                className="mt-10"
              />
            </div>
            <h1 className="text-black text-xl font-semibold font-sans text-center group-hover:text-black/90">
              Campaign Management
            </h1>

            <p className="hidden group-hover:block transition-all delay-700 text-white text-center">
              Our campaign management service handles planning and execution for
              election success. We analyze voter data, manage offline & digital
              strategies, coordinate field teams, build messaging, and track
              real-time performance to deliver a smooth, targeted, and
              result-oriented political campaign.
            </p>
          </div>
        </div>

        {/* Social Media Advertisement */}
        <div className="h-[10rem] md:h-[35rem] bg-[#8E1616] rounded-xl p-4 w-full md:w-60 hover:w-[70rem] transition-all duration-500 hover:bg-[#450606] flex justify-center items-center group overflow-hidden cursor-pointer">
          <div className="flex flex-col items-center gap-4 h-full w-full justify-center">
            <div className="w-full flex justify-center items-center">
              <Image
                src="/assets/socialMedia.png"
                alt="Logo"
                width={220}
                height={220}
                className="mt-10"
              />
            </div>
            <h1 className="text-white text-xl font-semibold font-sans text-center group-hover:text-yellow-100">
              Social Media Advertisement
            </h1>

            <p className="hidden group-hover:block transition-all delay-700 text-white text-center">
              We create data-driven social media advertising campaigns to reach
              targeted voters across platforms like Facebook, Instagram,
              YouTube, X, and WhatsApp. Our strategy boosts engagement,
              visibility, and influence through creative content, optimized ads,
              and real-time performance tracking.
            </p>
          </div>
        </div>

        {/* Voter & Booth Management */}
        <div className="h-[10rem] md:h-[35rem] bg-[#E8C999] rounded-xl p-4 w-full md:w-60 hover:w-[70rem] transition-all duration-500 hover:bg-[#685539] flex justify-center items-center group overflow-hidden cursor-pointer">
          <div className="flex flex-col items-center gap-4 h-full w-full justify-center">
            <div className="w-full flex justify-center items-center">
              <Image
                src="/assets/voterBooth.jpg"
                alt="Logo"
                width={220}
                height={220}
                className="mt-15 rounded-2xl "
              />
            </div>
            <h1 className="text-black text-xl font-semibold text-center">
              Voter & Booth Management
            </h1>

            <p className="hidden group-hover:block transition-all delay-700 text-white text-center">
              We manage booth-level strategies with accurate voter data,
              segmentation, volunteer training, voter turnout plans, and ground
              intelligence. Our structured booth management model ensures
              maximum polling efficiency and impactful last-mile political
              execution.
            </p>
          </div>
        </div>

        {/* D2D Service */}
        <div className="h-[10rem] md:h-[35rem] bg-[#8E1616] rounded-xl p-4 w-full md:w-60 hover:w-[70rem] transition-all duration-500 hover:bg-[#450606] flex justify-center items-center group overflow-hidden cursor-pointer">
          <div className="flex flex-col items-center gap-4 h-full w-full justify-center">
            <div className="w-full flex justify-center items-center">
              <Image
                src="/assets/d2d.jpg"
                alt="Logo"
                width={220}
                height={220}
                className="mt-10 rounded-2xl"
              />
            </div>
            <h1 className="text-white text-xl font-semibold text-center">
              D2D (Door-to-Door) Service
            </h1>

            <p className="hidden group-hover:block transition-all delay-700 text-white text-center">
              Our door-to-door campaign service ensures direct voter interaction
              with targeted messaging, issue-based communication, survey
              collection, and real-time feedback reporting. We create personal
              connections that influence voter decisions and strengthen
              candidate support.
            </p>
          </div>
        </div>

        {/* Election War Room */}
        <div className="h-[10rem] md:h-[35rem] bg-[#E8C999] rounded-xl p-4 w-full md:w-60 hover:w-[70rem] transition-all duration-500 hover:bg-[#685539] flex justify-center items-center group overflow-hidden cursor-pointer">
          <div className="flex flex-col items-center gap-4 h-full w-full justify-center">
            <div className="w-full flex justify-center items-center">
              <Image
                src="/assets/electionWarRoom.jpg"
                alt="Logo"
                width={220}
                height={220}
                className="mt-10 rounded-2xl"
              />
            </div>
            <h1 className="text-black text-xl font-semibold text-center">
              Election War Room
            </h1>

            <p className="hidden group-hover:block transition-all delay-700 text-white text-center">
              Our election war room monitors ground activity, public sentiment,
              social media trends, and competitor moves in real time. We provide
              rapid data analysis, crisis response, and strategy adjustments to
              ensure a strong and controlled election environment.
            </p>
          </div>
        </div>

        {/* Opinion & Exit Poll */}
        <div className="h-[10rem] md:h-[35rem] bg-[#8E1616] rounded-xl p-4 w-full md:w-60 hover:w-[70rem] transition-all duration-500 hover:bg-[#450606] flex justify-center items-center group overflow-hidden cursor-pointer">
          <div className="flex flex-col items-center gap-4 h-full w-full justify-center">
            <div className="w-full flex justify-center items-center">
              <Image
                src="/assets/opinionpoll.jpg"
                alt="Logo"
                width={220}
                height={220}
                className="mt-10 rounded-2xl"
              />
            </div>
            <h1 className="text-white text-xl font-semibold text-center">
              Opinion Poll & Exit Poll
            </h1>

            <p className="hidden group-hover:block transition-all delay-700 text-white text-center">
              Our expert opinion & exit polls deliver accurate insights using
              advanced data collection, research analytics, and voter behavior
              studies. We measure public mood, predict outcomes, and help refine
              campaign strategies with reliable statistical models.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Section: Accordion */}
      <div className="md:hidden">
        <Accordion type="single" collapsible className="w-full">
          {/* Personal Branding */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-[#c02121] group data-[state=open]:bg-[#8E1616] data-[state=open]:bg-[#8E1616]">
              <div className="h-[6.2rem] group-data-[state=open]:h-[10rem] w-full transition-all flex justify-center items-center overflow-hidden cursor-pointer">
                <div className="flex flex-col items-center h-full w-full justify-center px-5 group-data-[state=open]:px-0">
                  <div className="flex md:block w-full">
                    <div className="w-full md:flex justify-center items-center ">
                      <Image
                        src="/assets/personalBranding.png"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="group-data-[state=open]:w-[150px] w-[120px] md:w-[200px] group-data-[state=open]:mx-[35%] transition-all duration-600 ease-in-out "
                      />
                    </div>

                    {/* 👇 This H1 hides when accordion opens */}
                    <h1 className="trigger-title text-white text-xl font-semibold font-sans text-center justify-center items-center flex w-full text-nowrap group-data-[state=open]:hidden ">
                      Personal Branding
                    </h1>
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="bg-[#8E1616] p-4 rounded-b-xl">
                <h1 className="text-yellow-100 text-[1.3rem] font-semibold font-sans text-center mb-2">
                  Personal Branding
                </h1>
                <p className="text-white/80 text-center text-base">
                  Our personal branding service helps political leaders build a
                  strong, credible, and influential public image. We craft
                  compelling narratives, manage social media presence, enhance
                  media visibility, and shape public perception to strengthen
                  voter trust and recognition.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Campaign Management */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="bg-[#E8C999] group data-[state=open]:bg-[#846d4a] ">
              <div className="h-[6.2rem] group-data-[state=open]:h-[10rem] w-full transition-all flex justify-center items-center overflow-hidden cursor-pointer">
                <div className="flex flex-col items-center h-full w-full justify-center px-5 group-data-[state=open]:px-0">
                  <div className="flex md:block w-full">
                    <div className="w-full md:flex justify-center items-center ">
                      <Image
                        src="/assets/campaignManagement.png"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="group-data-[state=open]:w-[180px] w-[130px] md:w-[200px] group-data-[state=open]:mx-[30%] transition-all duration-600 ease-in-out "
                      />
                    </div>

                    {/* 👇 This H1 hides when accordion opens */}
                    <h1 className=" text-black text-xl font-semibold font-sans text-center justify-center items-center flex w-full  group-data-[state=open]:hidden ">
                      Campaign Management
                    </h1>
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance ">
              <div className=" bg-[#846d4a] p-4 rounded-b-xl">
                <h1 className="text-amber-200 text-[1.3rem] font-semibold font-sans text-center mb-2">
                  Campaign Management
                </h1>
                <p className=" transition-all delay-700 text-white/80 text-center text-base">
                  Our campaign management service handles planning and execution
                  for election success. We analyze voter data, manage offline &
                  digital strategies, coordinate field teams, build messaging,
                  and track real-time performance to deliver a smooth, targeted,
                  and result-oriented political campaign.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Social Media Advertisement */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-[#c02121] group data-[state=open]:bg-[#8E1616]">
              <div className="h-[6.2rem] group-data-[state=open]:h-[10rem] w-full transition-all flex justify-center items-center overflow-hidden cursor-pointer">
                <div className="flex flex-col items-center h-full w-full justify-center px-5 group-data-[state=open]:px-0">
                  <div className="flex md:block w-full">
                    <div className="w-full md:flex justify-center items-center ">
                      <Image
                        src="/assets/socialMedia.png"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="group-data-[state=open]:w-[150px] w-[120px] md:w-[200px] group-data-[state=open]:mx-[35%] transition-all duration-600 ease-in-out "
                      />
                    </div>

                    <h1 className="trigger-title text-white text-xl font-semibold font-sans text-center justify-center items-center flex w-full  group-data-[state=open]:hidden ">
                      Social Media Advertisement
                    </h1>
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="bg-[#8E1616] p-4 rounded-b-xl">
                <h1 className="text-yellow-100 text-[1.3rem] font-semibold font-sans text-center mb-2">
                  Social Media Advertisement
                </h1>
                <p className="text-white/80 text-center text-base">
                  We create data-driven social media advertising campaigns to
                  reach targeted voters across platforms like Facebook,
                  Instagram, YouTube, X, and WhatsApp. Our strategy boosts
                  engagement, visibility, and influence through creative
                  content, optimized ads, and real-time performance tracking.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Voter & Booth Management */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="bg-[#E8C999] group data-[state=open]:bg-[#846d4a]">
              <div className="h-[6.2rem] group-data-[state=open]:h-[10rem] w-full transition-all flex justify-center items-center overflow-hidden cursor-pointer">
                <div className="flex flex-col items-center h-full w-full justify-center px-5 group-data-[state=open]:px-0">
                  <div className="flex md:block w-full">
                    <div className="w-full md:flex justify-center items-center ">
                      <Image
                        src="/assets/voterBooth.jpg"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="group-data-[state=open]:w-[170px] w-[130px] md:w-[200px] group-data-[state=open]:mx-[30%] rounded-2xl transition-all duration-600 ease-in-out "
                      />
                    </div>

                    <h1 className="trigger-title text-black text-xl font-semibold font-sans text-center justify-center items-center flex w-full  group-data-[state=open]:hidden ">
                      Voter &amp; Booth Management
                    </h1>
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className=" bg-[#846d4a] p-4 rounded-b-xl">
                <h1 className="text-amber-200 text-[1.3rem] font-semibold font-sans text-center mb-2">
                  Voter &amp; Booth Management
                </h1>
                <p className=" transition-all delay-700 text-white/80 text-center text-base">
                  We manage booth-level strategies with accurate voter data,
                  segmentation, volunteer training, voter turnout plans, and
                  ground intelligence. Our structured booth management model
                  ensures maximum polling efficiency and impactful last-mile
                  political execution.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* D2D Service */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="bg-[#c02121] group data-[state=open]:bg-[#8E1616]">
              <div className="h-[6.2rem] group-data-[state=open]:h-[10rem] w-full transition-all flex justify-center items-center overflow-hidden cursor-pointer">
                <div className="flex flex-col items-center h-full w-full justify-center px-5 group-data-[state=open]:px-0">
                  <div className="flex md:block w-full">
                    <div className="w-full md:flex justify-center items-center ">
                      <Image
                        src="/assets/d2d.jpg"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="group-data-[state=open]:w-[160px] w-[130px] md:w-[200px] group-data-[state=open]:mx-[32%] rounded-2xl transition-all duration-600 ease-in-out "
                      />
                    </div>

                    <h1 className="trigger-title text-white text-xl font-semibold font-sans text-center justify-center items-center flex w-full  group-data-[state=open]:hidden ">
                      D2D (Door-to-Door) Service
                    </h1>
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="bg-[#8E1616] p-4 rounded-b-xl">
                <h1 className="text-yellow-100 text-[1.3rem] font-semibold font-sans text-center mb-2">
                  D2D (Door-to-Door) Service
                </h1>
                <p className="text-white/80 text-center text-base">
                  Our door-to-door campaign service ensures direct voter
                  interaction with targeted messaging, issue-based
                  communication, survey collection, and real-time feedback
                  reporting. We create personal connections that influence voter
                  decisions and strengthen candidate support.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Election War Room */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="bg-[#E8C999] group data-[state=open]:bg-[#846d4a]">
              <div className="h-[6.2rem] group-data-[state=open]:h-[10rem] w-full transition-all flex justify-center items-center overflow-hidden cursor-pointer">
                <div className="flex flex-col items-center h-full w-full justify-center px-5 group-data-[state=open]:px-0">
                  <div className="flex md:block w-full">
                    <div className="w-full md:flex justify-center items-center ">
                      <Image
                        src="/assets/electionWarRoom.jpg"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="group-data-[state=open]:w-[170px] w-[130px] md:w-[200px] group-data-[state=open]:mx-[30%] rounded-2xl transition-all duration-600 ease-in-out "
                      />
                    </div>

                    <h1 className="trigger-title text-black text-xl font-semibold font-sans text-center justify-center items-center flex w-full  group-data-[state=open]:hidden ">
                      Election War Room
                    </h1>
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className=" bg-[#846d4a] p-4 rounded-b-xl">
                <h1 className="text-amber-200 text-[1.3rem] font-semibold font-sans text-center mb-2">
                  Election War Room
                </h1>
                <p className=" transition-all delay-700 text-white/80 text-center text-base">
                  Our election war room monitors ground activity, public
                  sentiment, social media trends, and competitor moves in real
                  time. We provide rapid data analysis, crisis response, and
                  strategy adjustments to ensure a strong and controlled
                  election environment.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Opinion & Exit Poll */}
          <AccordionItem value="item-7">
            <AccordionTrigger className="bg-[#c02121] group data-[state=open]:bg-[#8E1616]">
              <div className="h-[6.2rem] group-data-[state=open]:h-[10rem] w-full transition-all flex justify-center items-center overflow-hidden cursor-pointer">
                <div className="flex flex-col items-center h-full w-full justify-center px-5 group-data-[state=open]:px-0">
                  <div className="flex md:block w-full">
                    <div className="w-full md:flex justify-center items-center ">
                      <Image
                        src="/assets/opinionpoll.jpg"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="group-data-[state=open]:w-[165px] w-[130px] md:w-[200px] group-data-[state=open]:mx-[32%] rounded-2xl transition-all duration-600 ease-in-out "
                      />
                    </div>

                    <h1 className="trigger-title text-white text-xl font-semibold font-sans text-center justify-center items-center flex w-full  group-data-[state=open]:hidden ">
                      Opinion Poll &amp; Exit Poll
                    </h1>
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="bg-[#8E1616] p-4 rounded-b-xl">
                <h1 className="text-yellow-100 text-[1.3rem] font-semibold font-sans text-center mb-2">
                  Opinion Poll &amp; Exit Poll
                </h1>
                <p className="text-white/80 text-center text-base">
                  Our expert opinion &amp; exit polls deliver accurate insights
                  using advanced data collection, research analytics, and voter
                  behavior studies. We measure public mood, predict outcomes,
                  and help refine campaign strategies with reliable statistical
                  models.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PoliticalServices;
