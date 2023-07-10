import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const Main = ({ memoData }) => {
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

      {/* <ul className="recently_list">
            <span>작성된 메모가 없습니다.</span>
          </ul> */}
      <div className="do_plan">
        <div>
          <span>오늘의 스터디 플랜을 시작해보세요!</span>
          <button className="do_plan_btn">오늘의 플랜 작성하기</button>
        </div>
      </div>
      <div className="recently">
        <h3>최근 작성된 메모</h3>
        {memoData.length > 0 ? (
          <ul className="recently_list">
            {memoData
              .filter(item => item.iuser === 2)
              .slice(-3)
              .map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
          </ul>
        ) : (
          <span>작성된 메모가 없습니다.</span>
        )}
      </div>
    </div>
  );
};

export default Main;
