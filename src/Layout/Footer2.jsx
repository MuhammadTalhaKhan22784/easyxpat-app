import React from "react";
import "./style.css";
import GetStarted from "../Component/Button/GetStarted";
import { Box } from "@material-ui/core";
// assets
import rectangleLine from "../Assets/Rectangle 18.svg";
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
              <img src={logo} alt="..." />
            </Box>
            <Box className="fb_text">
              <span>ABOUT</span>
              <span>GUIDES</span>
              <span>RESOURCES</span>
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
