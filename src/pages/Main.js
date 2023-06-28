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

      <div className="banner_box">
        <div className="banner">
          <Link to="/note">
            <span className="banner_title">
              <FontAwesomeIcon icon={faNoteSticky} />
              <h1>MY NOTE</h1>
            </span>

            <span>오늘 생각과 아이디어를 자유롭게 적어보세요</span>
          </Link>
        </div>
        <div className="banner">
          <Link to="/calendarPage">
            <span className="banner_title">
              <FontAwesomeIcon icon={faClipboardList} />
              <h1>STUDY-PLAN</h1>
            </span>

            <span>계획하신 스터디 플랜이 있으신가요?</span>
          </Link>
        </div>
      </div>
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
