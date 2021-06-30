import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";
import drpdownImg from "../../../Assets/Drop Down.png";
import CardSteps from "./CardSteps";
const GuideProcess = () => {
  const [apiData, setApiData] = useState([]);
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  const [data, setData] = useState({
    id: "",
    name: "",
    cities: [],
  });

  useEffect(() => {
    axios
      .get("https://easyxpat-procedure.herokuapp.com/procedures")
      .then((res) => {
        setApiData(res.data);
        // setData(res.data[0]);
        const { id, name, city } = res.data[0];
        setData({
          id,
          name,
          cities: [city],
        });
        setVal(name)
        setVal2(city)
      })
      .catch((error) => console.log(error));
  }, []);
  const handleSelectName = (e) => {
    setVal(e.name);
    setData({
      id: e.id,
      name: e.name,
      cities: [e.city],
    });
    setVal2(e.city);
  };
  const handleSelectCity = (e) => {
    setVal2(e);
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
                  <li key={index} onClick={() => handleSelectName(d)}>
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
              {data.cities
                ? data.cities.map((d, index) => {
                    return (
                      <li key={index} onClick={() => handleSelectCity(d)}>
                        <span className="dropdown-item">{d}</span>
                      </li>
                    );
                  })
                : apiData.map((d, index) => {
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
      <CardSteps ApiData={data} />
    </React.Fragment>
  );
};

export default GuideProcess;
