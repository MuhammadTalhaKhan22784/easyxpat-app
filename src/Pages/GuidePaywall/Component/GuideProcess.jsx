import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";
import drpdownImg from "../../../Assets/Drop Down.png";
import CardSteps from "./CardSteps";
const GuideProcess = () => {
  const [apiData, setApiData] = useState([]);
  const [sortedName, setsortedName] = useState("");
  const [sortedCity, setsortedCity] = useState("");
  const [filterData, setfilterData] = useState({});
  const [citiesAccording, setCitiesAccording] = useState([]);
  const [data, setData] = useState({
    id: "",
    name: "",
    cities: [],
  });

  useEffect(() => {
    // fetching Api using axios
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
        setsortedName(name);
        setsortedCity(city);
        // reducing same card names/title like blue card is morethen 1 then we get only one time
        var countList = res.data.reduce(function (p, c) {
          p[c.name] = (p[c.name] || 0) + 1;
          return p;
        }, []);
        // now set initial fetched data in our state
        setfilterData(countList);
        // set all the cards names into his state
        let ob = Object.keys(countList);
        let x = res.data.filter((sortedName) => sortedName.name === ob[0]);
        setCitiesAccording(x);
      })
      // error handling
      .catch((error) => console.log(error));
  }, []);
  // Manage sorted item 
  const handleSelectName = (d) => {
    // sorting card name/title
    let sortedCardName = apiData.filter((sortedName) => sortedName.name === d);
    // set sorted data according to their states
    setsortedCity(sortedCardName[0].city);
    setsortedName(sortedCardName[0].name);
    setCitiesAccording(sortedCardName);
    // if cardName is exist then run a map 
    sortedCardName.length &&
      sortedCardName.map((v, i) => {
        return setData({
          id: sortedCardName[0].id,
          name: sortedCardName[0].name,
          cities: sortedCity,
        });
      });
  };
  // manage city Dropdown select 
  const handleSelectCity = (e, d) => {
    // filtering id 
    let ss = apiData.filter((sortedName) => sortedName.id === d.id);
    // set filtered city in our state
    setsortedCity(ss[0].city);
    // set Whole data of particular selected city according to dropdown select
    setData({
      id: ss[0].id,
      name: ss[0].name,
      cities: ss[0].city,
    });

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
              <span>{sortedName ? sortedName : "Blue Card"}</span>
              <img src={drpdownImg} alt="..." />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {Object.keys(filterData).length !== 0 &&
                Object.keys(filterData).map((fdataa, index) => {
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
              <span>{sortedCity ? sortedCity : "Frankfurt"}</span>
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
      {/* sending selected card item data to card steps in props */}
      <CardSteps ApiData={data} />
    </React.Fragment>
  );
};

export default GuideProcess;
