import React, { useState } from "react";
import { Box } from "@material-ui/core";
import data from "../steps.json";

const CardSteps = ({ ApiData }) => {
  const [show, setShow] = useState("");

  const filterData = data.filter((val) => val.procedure_id === ApiData.id);

  const handleOpen = (e) => {
    setShow(e);
  };
  const handleClose = (e) => {
    setShow(e);
  };
  return (
    <React.Fragment>
      <Box className="card_steps_section">
        <h2>Blue Card: Step by Step</h2>
        <Box className="card_wrapper">
          {filterData &&
            filterData.map((val) => (
              <Box className="card_steps_content" key={val.id}>
                <Box
                  className={`c_steps ${
                    show !== val.id ? "c_steps2" : "c_steps1"
                  }`}
                  onClick={() => {
                    show !== val.id ? handleOpen(val.id) : handleClose("");
                  }}
                >
                  <h2>{show !== val.id ? val.name : val.name}</h2>
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
