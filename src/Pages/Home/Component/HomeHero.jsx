import React from "react";
import GetStarted from "../../../Component/Button/GetStarted";
import "../Home.css";
const HomeHero = () => {
  return (
    <React.Fragment>
      <div className="hero_section">
        <h1>
          Immigration to Germany. <br /> Made simple.
        </h1>
        <GetStarted />
      </div>
    </React.Fragment>
  );
};

export default HomeHero;
