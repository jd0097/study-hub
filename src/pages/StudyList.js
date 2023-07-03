import React from "react";
import StudyListForm from "../components/StudyListForm";
import StudyListEmpty from "../components/StudyListEmpty";

const StudyList = () => {
  return (
    <div className="study_list_warp">
      <h1 className="title">스터디 리스트</h1>
      <div className="study_inner">
        <div className="timer_date">
          <div className="today">
            {/* 날자 데이터가 들어갑니다. */}
            <span>5월 23일</span>
          </div>
          <div className="timer">
            {/* 타이머가 들어갑니다. */}
            <div className="time_box">
              <span>00:00:00</span>
            </div>
            <div className="time_select">
              <button className="start_btn">시작</button>
              <button className="stop_btn">정지</button>
            </div>
          </div>
        </div>
        {/* 만약 데이터가 있으면 StudyListForm */}
        {/* <StudyListForm /> */}
        {/* 없으면 아래 출력 */}
        <StudyListEmpty />
      </div>
    </div>
  );
};

export default StudyList;
