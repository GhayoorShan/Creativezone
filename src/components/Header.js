import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg ">
          <img src={logo} className="d-inline-block align-top" alt="logo" />
          <button
            id="nav-toggle-button"
            className="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item  ">
                <a className="nav-link text-white">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
