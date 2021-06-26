import { Button } from "@material-ui/core";
import React from "react";

// assets
import arrow from "../../Assets/Union.svg";
const GetStarted = () => {
  return (
    <div>
      <Button className="gts_btn"><span>Get Started</span> <img src={arrow} alt="..." /></Button>
    </div>
  );
};

export default GetStarted;
