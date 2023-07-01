import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <div className="account">
          <ul className="account_list">
            <div className="account_img"></div>
            <li>
              <Link to="/mypages">MYPAGE </Link>
            </li>
          </ul>
        </div>
        <div className="nav">
          <div className="nav_inner">
            <div className="logo"></div>
            <ul className="nav_list">
              <li>
                <Link to="/main">HOME</Link>
              </li>
              <li>
                <Link to="/caledar">STUDY-CALENDAR</Link>
              </li>
              <li>
                <Link to="/studyplan">STUDY-PLAN</Link>
              </li>
              <li>
                <Link to="/note">MEMO</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
