import React, { useLayoutEffect } from "react";
import Header from "../../Layout/Header";
import GuideProcess from "../GuidePaywall/Component/GuideProcess";
import AdditionalLink from "../GuidePaywall/Component/AdditionalLink";
import Footer2 from "../../Layout/Footer2";
import "./GuidePaywall.css";
const GuidePaywall = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <GuideProcess />
      <AdditionalLink />
      <Footer2 />
    </React.Fragment>
  );
};

export default GuidePaywall;
