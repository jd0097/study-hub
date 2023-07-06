import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Space, Row } from "antd";
import moment from "moment/moment";
import StudyTimer from "../components/StudyTimer";
import Item from "antd/es/list/Item";

const StudyPlan = ({
  planData,
  setPlanData,
  planTitle,
  setPlanTitle,
  planLog,
  setPlanLog,
  planIndex,
  setPlanIndex,
  profile,
}) => {
  const navigate = useNavigate();


  const handleClick = () => {
    navigate ("/studywrite");
    setPlanLog("")
  }


  const handleSubmit = _itodo => {
    setPlanLog(_itodo);
    navigate("/studywrite");
  };



// useEffect(() => {}, [planIndex]) 

  // 오늘 날짜
  const today = moment().format("MM월 DD일");

  return (
    <div className="study_plan_warp">
      <h1 className="title">STUDY-PLAN</h1>
      <div className="study_inner">

      <div className="timer_date">

          <div className="today">
            {/* 날자 데이터가 들어갑니다. */}
            <Input
              value={today}
              style={{
                textAlign: "center",
                borderStyle: "unset",
                borderRadius: "unset",
              }}
            />
          </div>
          {/* 타이머출력 위치 */}
          <StudyTimer />

        </div>
        <div className="button_form">
          <Button  style={{ borderRadius: "20px"}}>
                전체삭제
          </Button>
          <Button onClick={handleClick} style={{ borderRadius: "20px"}}>
                작성하기
          </Button>
        </div>
        {planData ? (
          <ul className="study_list">
            {planData
            .filter(item => item.iuser === 2)
            .map((item, index) => (
               <li key={index}>
               <span className="study_list_title">
                 <p>{item.title}</p>
               </span>
               <span className="study_list_text">
                 <p>{item.ctnt}</p>
                 <div className="list_func">
                   <Button onClick={() => handleSubmit(item.itodo)} style={{ borderRadius: "25px"}}>
                     수정
                   </Button>
                   <Button  style={{ borderRadius: "20px" }}
                   >
                     삭제
                   </Button>
                 </div>
               </span>
             </li>

            ))}
          </ul>
        ) : (
          <div>
            <Row
              justify="center"
              style={{ margin: "30px 0", textAlign: "center" }}
            >
              <span className="empty_notice">
                작성하신 스터디 플랜이 없습니다.
                <br />
                플랜을 작성해보세요.
              </span>
            </Row>
            <Row justify="center" style={{ margin: "30px 0" }}>

              <Button onClick={handleClick} style={{ borderRadius: "20px"}}>
                작성하기
              </Button>
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyPlan;