import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";
import drpdownImg from "../../../Assets/Drop Down.png"
const GuideProcess = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://easyxpat-procedure.herokuapp.com/procedures")
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("coins ashdjasgdhj");
  console.log("coins", coins);
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
              <span>Blue Card</span>
              <img src={drpdownImg} alt="..." />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {coins.map((d, index) => {
                return (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {d.name}
                    </a>
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
              <span>Frankfurt</span>
              <img src={drpdownImg} alt="..." />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {coins.map((d, index) => {
                return (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {d.city}
                    </a>
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
