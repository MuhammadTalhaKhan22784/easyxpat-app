import React, { useState } from "react";
import { Box } from "@material-ui/core";
import data from "../steps.json";

const CardSteps = () => {
  console.log(data);
  // let [show, setShow] = useState({
  //   f: false,
  //   f1: false,
  //   f2: false,
  //   f3: false,
  //   f4: false,
  //   f5: false,
  // });
  const [show,setShow] = useState('')

  const handleOpen = (e) => {
    // setShow({ ...show, [e]: !show[e] });
    setShow(e)
  };
  const handleClose =(e)=>{
    setShow(e)
  }
  return (
    <React.Fragment>
      <Box className="card_steps_section">
        <h2>Blue Card: Step by Step</h2>
        <Box className="card_wrapper">
          {data.map((val) => (
            <Box className="card_steps_content" key={val.id}>
              <Box
                className={`c_steps ${show !==val.id ? "c_steps2" : "c_steps1"}`}
                onClick={() =>{show!==val.id? handleOpen(val.id):handleClose('')}}
              >
                <h2>{show!==val.id? val.name : val.description}</h2>
              </Box>
              <p style={{ display: show !== val.id ? "none" : "block" }}>
                {val.description}
                <br />
                <br />
                The central department for the foreign education service (ZAB)
                offers an online- database where one can check which foreign
                university degrees are accepted in Germany. If the database does
                not offer helpful information, EU blue card applicants need to
                apply for an individual check of their degrees. This check is
                not for free and needs to be presented at the foreign
                department.
              </p>
            </Box>
          ))}
          {/*               
          <Box className="card_steps_content">
            <Box
              className={`c_steps ${!show.f1 ? "c_steps2" : "c_steps1"}`}
              onClick={() => handleOpen("f1")}
            >
              <h2>{!show.f1 ? "STEP 1" : "Prepare your university degree"}</h2>
            </Box>
            <p style={{ display: !show.f1 ? "none" : "block" }}>
              German university degree, a foreign university degree which is
              accepted or a foreign university degree that is similar to a
              German one.
              <br />
              <br />
              The central department for the foreign education service (ZAB)
              offers an online- database where one can check which foreign
              university degrees are accepted in Germany. If the database does
              not offer helpful information, EU blue card applicants need to
              apply for an individual check of their degrees. This check is not
              for free and needs to be presented at the foreign department.
            </p>
          </Box>

          <Box className="card_steps_content">
            <Box
              className={`c_steps ${!show.f2 ? "c_steps2" : "c_steps1"}`}
              onClick={() => handleOpen("f2")}
            >
              <h2>{!show.f2 ? "STEP 1" : "Prepare your university degree"}</h2>
            </Box>
            <p style={{ display: !show.f2 ? "none" : "block" }}>
              German university degree, a foreign university degree which is
              accepted or a foreign university degree that is similar to a
              German one.
              <br />
              <br />
              The central department for the foreign education service (ZAB)
              offers an online- database where one can check which foreign
              university degrees are accepted in Germany. If the database does
              not offer helpful information, EU blue card applicants need to
              apply for an individual check of their degrees. This check is not
              for free and needs to be presented at the foreign department.
            </p>
          </Box>

          <Box className="card_steps_content">
            <Box
              className={`c_steps ${!show.f3 ? "c_steps2" : "c_steps1"}`}
              onClick={() => handleOpen("f3")}
            >
              <h2>{!show.f3 ? "STEP 1" : "Prepare your university degree"}</h2>
            </Box>
            <p style={{ display: !show.f3 ? "none" : "block" }}>
              German university degree, a foreign university degree which is
              accepted or a foreign university degree that is similar to a
              German one.
              <br />
              <br />
              The central department for the foreign education service (ZAB)
              offers an online- database where one can check which foreign
              university degrees are accepted in Germany. If the database does
              not offer helpful information, EU blue card applicants need to
              apply for an individual check of their degrees. This check is not
              for free and needs to be presented at the foreign department.
            </p>
          </Box>

          <Box className="card_steps_content">
            <Box
              className={`c_steps ${!show.f4 ? "c_steps2" : "c_steps1"}`}
              onClick={() => handleOpen("f4")}
            >
              <h2>{!show.f4 ? "STEP 1" : "Prepare your university degree"}</h2>
            </Box>
            <p style={{ display: !show.f4 ? "none" : "block" }}>
              German university degree, a foreign university degree which is
              accepted or a foreign university degree that is similar to a
              German one.
              <br />
              <br />
              The central department for the foreign education service (ZAB)
              offers an online- database where one can check which foreign
              university degrees are accepted in Germany. If the database does
              not offer helpful information, EU blue card applicants need to
              apply for an individual check of their degrees. This check is not
              for free and needs to be presented at the foreign department.
            </p>
          </Box>

          <Box className="card_steps_content">
            <Box
              className={`c_steps ${!show.f5 ? "c_steps2" : "c_steps1"}`}
              onClick={() => handleOpen("f5")}
            >
              <h2>{!show.f5 ? "STEP 1" : "Prepare your university degree"}</h2>
            </Box>
            <p style={{ display: !show.f5 ? "none" : "block" }}>
              German university degree, a foreign university degree which is
              accepted or a foreign university degree that is similar to a
              German one.
              <br />
              <br />
              The central department for the foreign education service (ZAB)
              offers an online- database where one can check which foreign
              university degrees are accepted in Germany. If the database does
              not offer helpful information, EU blue card applicants need to
              apply for an individual check of their degrees. This check is not
              for free and needs to be presented at the foreign department.
            </p>
          </Box> */}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CardSteps;
