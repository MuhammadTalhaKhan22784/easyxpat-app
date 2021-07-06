import React, { useState } from "react";
import { Box } from "@material-ui/core";
import data from "../steps.json";

const CardSteps = ({ ApiData }) => {
  const [show, setShow] = useState("");
  // matching/filtering apiData with our json data to get steps
  const filterData = data.filter((val) => val.procedure_id === ApiData.id);
  // handle step open
  const handleOpen = (e) => {
    setShow(e);
  };
    // handle step close
  const handleClose = (e) => {
    setShow(e);
  };
  return (
    <React.Fragment>
      <Box className="card_steps_section">
        
        <h2> { ApiData.name}: Step by Step</h2>
        <Box className="card_wrapper">
          {filterData &&
            filterData.map((val) => (
              <Box className="card_steps_content" key={val.id}>
                <Box
                //  we implemented the condition you can change the open and close image of steps in future
                //  by replacing c_steps1 and c_steps2 images in CSS
                  className={`c_steps ${
                    show !== val.id ? "c_steps1" : "c_steps2"
                  }`}
                  onClick={() => {
                    show !== val.id ? handleOpen(val.id) : handleClose("");
                  }}
                >
                  <h2>{val.name}</h2>
                </Box>
                <p style={{ display: show !== val.id ? "none" : "block" }}>
                  {val.description}
                </p>
              </Box>
            ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CardSteps;
