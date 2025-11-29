import React from "react";
import PoliticalServices from "./PoliticalServices";
import PoliticalLogo from "./PoliticalLogo";
import PoliticiansWorked from "./PoliticiansWorked";
import NewsWorkedWith from "./NewsWorkedWith";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full ">
      <PoliticalLogo />
      <PoliticalServices />
      <PoliticiansWorked />
      <NewsWorkedWith />
    </div>
  );
};

export default Hero;
