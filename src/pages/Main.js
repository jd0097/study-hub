import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="home_wrap">
      <h1 className="title">HOME</h1>
      <div className="main_intro">
        <div className=" logo">로고</div>
        <h2>STUDY HUB에 오신걸 환영합니다.</h2>
      </div>

      {/* <div className="banner_box">
        <div className="banner">
          <Link to="/note">
            <h1>MY NOTE</h1>
          </Link>
        </div>
        <div className="banner">
          <Link to="/caledar">
            <h1>STUDY-PLAN</h1>
          </Link>
        </div>
      </div> */}
      <div className="recently">
        <h3>최근 작성 리스트</h3>
        <ul className="recently_list">
          <li>최대 3개의 데이터가 들어갑니다.</li>
          <li>최대 3개의 데이터가 들어갑니다.</li>
          <li>최대 3개의 데이터가 들어갑니다.</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
