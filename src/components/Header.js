import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Mypages from "../pages/Mypages";

const Header = ({ profile, editImg, editName }) => {
  const accountDetail = useRef(null);
  const showDeatil = () => {
    const accountDetailElement = accountDetail.current;
    const currentDisplay = accountDetailElement.style.display;
    accountDetailElement.style.display =
      currentDisplay === "none" ? "block" : "none";
  };

  const Gomypages = () => {
    accountDetail.current.style.display = "none";
  };
  return (
    <header className="header">
      <div className="inner">
        <div className="account">
          <ul className="account_list">
            <div className="account_img_box" onClick={showDeatil}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
              <div className="account_img">
                <img
                  src={"http://192.168.0.144:5008/img/" + editImg}
                  alt="이미지"
                ></img>
              </div>
            </div>
            {/* <div className="account_name">
              <p>
                반갑습니다.
                <br />
                {editName}님
              </p>
            </div> */}
            {/* <div className="to_myPage">
              <Link to="/mypages">MYPAGE</Link>
            </div> */}
            <div className="account_detail" ref={accountDetail}>
              <div className="detail">
                <div className="datail_info">
                  <img
                    src={"http://192.168.0.144:5008/img/" + editImg}
                    alt="이미지"
                  ></img>
                  <span>
                    반갑습니다
                    <br />
                    {editName}님
                  </span>
                </div>
                <Link to="/mypages" onClick={Gomypages}>
                  마이페이지
                </Link>
              </div>
            </div>
          </ul>
        </div>
        <div className="nav">
          <div className="nav_inner">
            <div className="logo"></div>
            <ul className="nav_list">
              <li>
                <NavLink to="/main" exact activeClassName="active">
                  MAIN
                </NavLink>
              </li>
              <li>
                <NavLink to="/caledar" exact activeClassName="active">
                  STUDY-CALENDAR
                </NavLink>
              </li>
              <li>
                <NavLink to="/studyplan" exact activeClassName="active">
                  STUDY-PLAN
                </NavLink>
              </li>
              <li>
                <NavLink to="/note" exact activeClassName="active">
                  MEMO
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
