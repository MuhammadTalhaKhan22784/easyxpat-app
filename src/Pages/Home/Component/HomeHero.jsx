import React from "react";
import GetStarted from "../../../Component/Button/GetStarted";
import "../Home.css";
import Header from "../../../Layout/Header";

const HomeHero = () => {
  return (
    <React.Fragment>
      <div className="hero_section">
        <Header />
        <div className="hs_content">
          <h1>
            Immigration to Germany. Made simple.
          </h1>
          <GetStarted />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHero;
