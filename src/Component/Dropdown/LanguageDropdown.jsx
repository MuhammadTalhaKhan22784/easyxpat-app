import React, { useState } from "react";

// import enFlag from "../../Assets/PNG/Landing Page/flag_en.png"
import FR from "../../Assets/lang2.png";
import EN from "../../Assets/lang1.png";
import { Icon } from "@iconify/react";
import baselineKeyboardArrowDown from "@iconify-icons/ic/baseline-keyboard-arrow-down";

const LanguageDropdown = () => {
  const [val, setVal] = useState("1");
  return (
    <React.Fragment>
      <div className="dropdown">
        <button
          className="btn lang_btn dropdown-toggle d-flex light_purple"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {val === "1" ? (
            <div>
              <img src={EN} alt="img" /> <span>EN</span>
            </div>
          ) : (
            <div>
              <img src={FR} alt="img" /> <span>FR</span>
            </div>
          )}

          <Icon
            className="fs-5 down_arrow down_arrow_1"
            icon={baselineKeyboardArrowDown}
          />
        </button>
        <ul
          className="dropdown-menu langdrpdwn_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <h2>Select a Language</h2>
          <li
            onClick={() => {
              setVal("1");
            }}
          >
            <button className="lngdrpdwn_btn bg_lightgreen text-white">
              <img src={EN} alt="img" /> <span>English</span>
              <Icon className="fs-5 down_arrow" />
            </button>
          </li>
          <li
            onClick={() => {
              setVal("2");
            }}
          >
            <button className="lngdrpdwn_btn text_bluegreen border_solid bluegreen_border bg_white">
              <img src={FR} alt="img" /> <span>France</span>
              <Icon className="fs-5 down_arrow" />
            </button>
          </li>
        </ul>
      </div>

      {/*     
      <li
        className="nav-item position_relative"
        onClick={() => {
          setVal("0");
        }}
      >
        <Link to="#" className="nav-link">
          <button className="dsadad">
            <img src={EN} alt="img" /> <span>EN</span>
            <Icon
              className="fs-5 down_arrow"
              icon={baselineKeyboardArrowDown}
            />
          </button>
        </Link>
        <div
          className="submenu .lang_submenu"
          style={{ display: val === "0" ? "block" : "none" }}
        >
          <ul className="submenu-item .lang_item text_lightgray">
            <h2>Select a Language</h2>
            <li className="nav-item">
              
              <button className="lngdrpdwn_btn">
                <img src={EN} alt="img" /> <span>EN</span>
                <Icon className="fs-5 down_arrow" />
              </button>
            </li>
            <li className="nav-item">
              <button className="lngdrpdwn_btn">
                <img src={FR} alt="img" /> <span>EN</span>
                <Icon className="fs-5 down_arrow" />
              </button>
            </li>
          </ul>
        </div>
      </li>
     */}
    </React.Fragment>
  );
};

export default LanguageDropdown;
