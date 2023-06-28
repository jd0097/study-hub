import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <div className="account">
          <ul className="account_list">
            <div className="account_img"></div>
            <li>
              <NavLink to="/mypages">MYPAGE</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav">
          <div className="nav_inner">
            <div className="logo"></div>
            <ul className="nav_list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive ? "bold" : "";
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calendarPage"
                  className={({ isActive }) => {
                    return isActive ? "bold" : "";
                  }}
                >
                  STUDY-PLAN
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/note"
                  className={({ isActive }) => {
                    return isActive ? "bold" : "";
                  }}
                >
                  NOTE
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
