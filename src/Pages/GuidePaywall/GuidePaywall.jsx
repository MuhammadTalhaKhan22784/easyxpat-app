import React from "react";
import Header from "../../Layout/Header";
import GuideProcess from "../GuidePaywall/Component/GuideProcess";
import OverallProgress from "../GuidePaywall/Component/OverallProgress";
import CardSteps from "../GuidePaywall/Component/CardSteps";
import AdditionalLink from "../GuidePaywall/Component/AdditionalLink";
import Footer2 from "../../Layout/Footer2";
import "./GuidePaywall.css";
const GuidePaywall = () => {
  return (
    <React.Fragment>
      <Header />
      <GuideProcess />
      <OverallProgress />
      <CardSteps />
      <AdditionalLink />
      <Footer2 />
    </React.Fragment>
  );
};

export default GuidePaywall;
