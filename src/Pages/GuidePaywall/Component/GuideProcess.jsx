import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";
import drpdownImg from "../../../Assets/Drop Down.png";
const GuideProcess = () => {
  const [apiData, setApiData] = useState([]);
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    axios
      .get("https://easyxpat-procedure.herokuapp.com/procedures")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSelectName = (e) => {
    setVal(e)
  };
  const handleSelectCity = (e) => {
    setVal2(e)
  };
  return (
    <React.Fragment>
      <Box className="guide_process">
        <h1>I am in the process of applying for a</h1>
        <div>
          <div className="dropdown cus_dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>{val ? val : "Blue Card"}</span>
              <img src={drpdownImg} alt="..." />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {apiData.map((d, index) => {
                return (
                  <li key={index} onClick={() => handleSelectName(d.name)}>
                    <span className="dropdown-item">{d.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <h1>in</h1>
          <div className="dropdown cus_dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>{val2 ? val2 : "Frankfurt"}</span>
              <img src={drpdownImg} alt="..." />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {apiData.map((d, index) => {
                return (
                  <li key={index} onClick={() => handleSelectCity(d.city)}>
                    <span className="dropdown-item">{d.city}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default GuideProcess;
