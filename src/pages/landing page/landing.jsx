import React from "react";
import "./landing.css";
import Header from "../../components/header/header";
import { Navlist } from "../../data/nav";
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
      <Header data={Navlist} />
      <main>
        <InfoSection data={MultiData} />
        <InfoSection data={starLinkData} />
        <InfoSection data={UssfData} />
        <InfoSection data={starshipData} />
      </main>
    </div>
  );
};

export default Landing;
