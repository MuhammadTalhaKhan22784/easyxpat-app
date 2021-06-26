import { Box } from "@material-ui/core";
import React from "react";
import "./style.css";
// assets
import logo from "../Assets/logo.svg";
import user from "../Assets/user.png";

const Header = () => {
  return (
    <>
      <Box className="">
        <nav className="header navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="..." />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    GUIDES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    RESOURCES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                <img src={user} alt="..." />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Box>
    </>
  );
};

export default Header;
