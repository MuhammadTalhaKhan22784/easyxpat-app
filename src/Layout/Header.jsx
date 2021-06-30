import { Box } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
// assets
import logo from "../Assets/logo.svg";
import user from "../Assets/user.png";
import LoginBtn from "../Component/Button/Login";
import { useState } from "react";

const Header = (props) => {
  const [show] = useState(true);
  const [showBtn, setShowBtn] = useState(true);
  return (
    <>
      <Box className="">
        <nav className="header navbar navbar-expand-lg navbar-light">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="..." />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {showBtn ? (
                <span
                  onClick={() => {
                    setShowBtn(false);
                  }}
                  className="navbar-toggler-icon"
                />
              ) : (
                <i
                  onClick={() => {
                    setShowBtn(true);
                  }}
                  class="fas fa-times"
                ></i>
              )}
            </button>
            <div
              style={{ display: !showBtn ? "block" : "none" }}
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/about">
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/guides">
                    GUIDES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="#">
                    RESOURCES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    {show === props.show ? (
                      <LoginBtn />
                    ) : (
                      <img className="user_logo" src={user} alt="..." />
                    )}
                  </NavLink>
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
