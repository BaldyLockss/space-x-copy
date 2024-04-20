import React from "react";
import "./landing.css";
import InfoSection from "./section/section";
import {
  MultiData,
  starLinkData,
  starshipData,
  UssfData
} from "../../data/headings";

const Landing = () => {
  return (
    <div>
      <InfoSection data={MultiData} />
      <InfoSection data={starLinkData} />
      <InfoSection data={UssfData} />
      <InfoSection data={starshipData} />
    </div>
  );
};

export default Landing;
