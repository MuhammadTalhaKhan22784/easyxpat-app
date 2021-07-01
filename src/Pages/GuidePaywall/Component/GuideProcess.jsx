import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";
import drpdownImg from "../../../Assets/Drop Down.png";
import CardSteps from "./CardSteps";
const GuideProcess = () => {
  const [apiData, setApiData] = useState([]);
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  const [fData, setFdata] = useState({});
  const [citiesAccording, setCitiesAccording] = useState([]);
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
        const { id, name, city } = res.data[0];
        setData({
          id,
          name,
          cities: city,
        });
        setVal(name);
        setVal2(city);
        var countList = res.data.reduce(function (p, c) {
          p[c.name] = (p[c.name] || 0) + 1;
          return p;
        }, []);
        setFdata(countList);
        let ob = Object.keys(countList);
        let x = res.data.filter((val) => val.name === ob[0]);
        setCitiesAccording(x);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleSelectName = (d) => {
    let ss = apiData.filter((val) => val.name === d);
    setVal2(ss[0].city);
    setVal(ss[0].name);
    setCitiesAccording(ss);
    ss.length &&
      ss.map((v, i) => {
        return setData({
          id: ss[0].id,
          name: ss[0].name,
          cities: val2,
        });
      });
  };
  const handleSelectCity = (e, d) => {
    let ss = apiData.filter((val) => val.id === d.id);
    setVal2(ss[0].city);
    setData({
      id: ss[0].id,
      name: ss[0].name,
      cities: ss[0].city,
    });
    // console.log(ss[0].city)
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
              {Object.keys(fData).length !== 0 &&
                Object.keys(fData).map((fdataa, index) => {
                  return (
                    <li key={index} onClick={() => handleSelectName(fdataa)}>
                      <span className="dropdown-item">{fdataa}</span>
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
              {citiesAccording.map((d, index) => {
                return (
                  <li key={index} onClick={() => handleSelectCity(d.city, d)}>
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
