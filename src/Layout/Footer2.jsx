import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { Box } from "@material-ui/core";
// assets
import logo from "../Assets/logo.svg";
import fbIcon from "../Assets/f.svg";
import twIcon from "../Assets/t.svg";
import inIcon from "../Assets/i.svg";
const Footer2 = () => {
  return (
    <React.Fragment>
      <Box className="footer_main footer_main2">
        <Box className="footer footer2">
          <Box className="footer_bottom">
            <Box className="fb_logo">
              <NavLink exact to="/">
                <img src={logo} alt="..." />
              </NavLink>
            </Box>
            <Box className="fb_text">
              <NavLink exact to="/about">
                <span>ABOUT</span>
              </NavLink>
              <NavLink exact to="/guides">
                <span>GUIDES</span>
              </NavLink>
              <NavLink exact to="#">
                <span>RESOURCES</span>
              </NavLink>
            </Box>
          </Box>
        </Box>
        <Box className="footer_copyright">
          <Box className="fbc_copyright">
            <span>Copyright @ 2021</span>
            <span>Impressum</span>
          </Box>
          <Box className="fbc_icon">
            <img src={fbIcon} alt="..." />
            <img src={twIcon} alt="..." />
            <img src={inIcon} alt="..." />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Footer2;
