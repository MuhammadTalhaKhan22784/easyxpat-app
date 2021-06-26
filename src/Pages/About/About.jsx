import { Box } from "@material-ui/core";
import React from "react";
import Header from "../../Layout/Header";
import AboutUsComp from "../../Pages/About/Component/AboutUsComp";
import "./About.css"
const About = () => {
  return (
    <>
      <Header />
      <Box className="container">
        <AboutUsComp />
      </Box>
    </>
  );
};

export default About;
