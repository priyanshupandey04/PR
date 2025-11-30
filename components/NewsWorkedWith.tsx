import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronDown } from "lucide-react";
import GradientText from "./GradientText";

type News = {
  id: number;
  name: string;
  image: string;
};

const NewsWorkedWith = () => {
  const news: News[] = [
    {
      id: 1,
      name: "Aaj Tak",
      image: "/assets/News/AajTak.png",
    },
    {
      id: 2,
      name: "ABP News",
      image: "/assets/News/ABPNews.png",
    },
    {
      id: 3,
      name: "NDTV",
      image: "/assets/News/NDTV.png",
    },
    {
      id: 4,
      name: "News 18 India",
      image: "/assets/News/News18India.png",
    },
    {
      id: 5,
      name: "Zee News",
      image: "/assets/News/Zeenews.png",
    },
  ];

  return (
    <div className="w-full my-12 overflow-y-hidden">
      <div className="mb-10">
        <GradientText
          colors={["#7C3AED", "#A4C9D0FF", "#A78BFA", "#60A5FA", "#F7F6F9FF"]}
          animationSpeed={2}
          showBorder={false}
          className="custom-class"
        >
          <h1 className="text-3xl flex gap-4 justify-center items-center">
            News Worked With
            <span>
              <ChevronDown className="text-[#E6EEF8] animate-bounce mt-3" />
            </span>
          </h1>
        </GradientText>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[95%] md:w-[90%] mx-auto"
      >
        <CarouselContent>
          {news.map((item, index) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <Card className="bg-black border-0">
                  <CardContent className="flex  items-center justify-center ">
                    <div className=" h-full w-full">
                      <img
                        src={item.image}
                        alt="Logo"
                        className="w-[90%] h-[50%] object-center  rounded-xl mx-auto "
                      />
                      <div className="mt-5">
                        <h1 className="text-xl md:text-2xl font-bold text-center text-white">
                          {item.name}
                        </h1>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default NewsWorkedWith;
