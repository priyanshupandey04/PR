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
import Image from "next/image";
type Props = {};

type Politician = {
  id: number;
  name: string;
  image: string;
  party?: string;
};

const PoliticiansWorked = (props: Props) => {
  const politicians: Politician[] = [
    {
      id: 1,
      name: "Mr. Narendra Modi",
      image: "/assets/politician/modi.png",
      party: "Bhartiya Janta Party",
    },
    {
      id: 2,
      name: "Mr. Rahul Gandhi",
      image: "/assets/politician/rahul.png",
      party: "Congress",
    },

    {
      id: 3,
      name: "Mr. Arvind Kejriwal",
      image: "/assets/politician/arvind.png",
      party: "AAP",
    },
    {
      id: 4,
      name: "Mr. Akhilesh Yadav",
      image: "/assets/politician/akhilesh.png",
      party: "Samajwadi Party",
    },
    {
      id: 5,
      name: "Mr. Yogi Adityanath",
      image: "/assets/politician/yogi.png",
      party: "Bhartiya Janta Party",
    },
    {
      id: 6,
      name: "Mr. Mamta Banerjee",
      image: "/assets/politician/mamta.png",
      party: "TMC",
    },
    {
      id: 7,
      name: "Mr. Rajnath Singh",
      image: "/assets/politician/rajnath.png",
      party: "Bhartiya Janta Party",
    },
    {
      id: 8,
      name: "Mr. Amit Shah",
      image: "/assets/politician/amitshah.png",
      party: "Bhartiya Janta Party",
    },
  ];

  return (
    <div className="w-full my-12">
      <div className="mb-10">
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
          className="custom-class "
        >
          <h1 className="text-3xl flex gap-4 justify-center items-center">
            Politicians Worked With
            <span>
              <ChevronDown className="text-white animate-bounce mt-3" />
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
          {politicians.map((politician, index) => (
            <CarouselItem
              key={politician.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="">
                <Card className="bg-black h-fit">
                  <CardContent className="flex aspect-square items-center justify-center ">
                    <div className=" h-full w-full">
                      <Image
                        src={politician.image}
                        alt="Logo"
                        width={250}
                        height={250}
                        className="w-[83%] h-[83%] object-cover  rounded-xl mx-auto"
                      />
                      <div className="mt-5">
                        <h1 className="text-xl md:text-2xl font-bold text-center text-white">
                          {politician.name}
                        </h1>
                        <p className="text-white/80 text-center text-base  md:text-lg">
                          {politician.party}
                        </p>
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

export default PoliticiansWorked;
