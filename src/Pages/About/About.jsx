import { Box } from "@material-ui/core";
import React from "react";
import Footer2 from "../../Layout/Footer2";
import Header from "../../Layout/Header";
import AboutUsComp from "../../Pages/About/Component/AboutUsComp";
import AvailableGuide from "../../Pages/About/Component/AvailableGuide";
import "./About.css";
const About = () => {
  return (
    <>
      <Header />
      <Box className="about_wrapper">
        <AboutUsComp />
        <AvailableGuide />
      </Box>
      <Footer2 />
    </>
  );
};

export default About;
