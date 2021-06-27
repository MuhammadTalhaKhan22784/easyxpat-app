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
import fImg from "../Assets/Group 35.png";
const Footer = () => {
  return (
    <React.Fragment>
      <Box className="footer_main">
        <Box className="footer">
          <Box className="footer_content">
            <img className="fimg_mob" src={fImg} alt="..." />
            <Box className="fc_line">
              <img src={rectangleLine} alt="..." />

              <Box className="fc_text">
                <p>
                  We provide guides and personalised tracking for every step to
                  make your immigration to Germany a <strong>success </strong>,
                  Sign up to get started today!
                </p>
              </Box>
            </Box>
            <form className="fc_form">
              <Box className="input_wrap">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your full name"
                />
              </Box>
              <Box className="input_wrap" mt="1rem">
                <label htmlFor="name">Email address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                />
              </Box>
              <Box mt="2rem">
                <GetStarted />
              </Box>
            </form>
          </Box>
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

export default Footer;
