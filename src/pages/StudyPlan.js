import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input, Row } from "antd";
import moment from "moment/moment";
import StudyTimer from "../components/StudyTimer";
import { deletePlan, getPlanData } from "../api/planFetch";

const StudyPlan = ({
  planData,
  setPlanData,
  setPlanLog,
}) => {
  // 타이머 보일지 말지
  const { selectday } = useParams();
  const [timerFlag, setTimerFlag] = useState(false);
  useEffect(() => {
    if (selectday === moment(Date.now()).format("YYYY-MM-DD")) {
      setTimerFlag(true);
    }
  }, []);

  const navigate = useNavigate();

  // console.log(category);
  // console.log(selectedSubject);

  //새 작성
  const handleClick = () => {
    navigate(`/studywrite/${selectday}`);
    setPlanLog("");
  };

  //데이터 수정
  const handleSubmit = (_itodo, _icate) => {
    setPlanLog(_itodo, _icate);
    navigate(`/studywrite/${selectday}`);
  };

 
  //선택 삭제
  const handleDeleteClick = async itodo => {
    console.log(itodo);
    const deleteTodoData = planData.filter(item => item.itodo !== itodo);
    setPlanData(deleteTodoData);
    console.log(planData);
    const result = await deletePlan(itodo);
  };
  // //선택 삭제
  // const handleDeleteClick = (_itodo) => {
  //   if (_itodo !== undefined) {
  //     const deleteTodoData = planData.filter((item) => item.itodo !== _itodo);
  //     setPlanData(deleteTodoData);
  //     deletePlan(_itodo);
  //   }
  // };

  // 오늘 날짜
  const today = moment(selectday).format("MM월 DD일");

  // 플랜데이터 가져오기
  const getPlanFetch = async () => {
    try {
      const daysArr = selectday.split("-");
      // console.log(daysArr);
      const planJson = await getPlanData(
        parseInt(daysArr[1]),
        parseInt(daysArr[0]),
        parseInt(daysArr[2]),
      );
      setPlanData(planJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPlanFetch();
  }, []);

  return (
    <div className="study_plan_warp">
      <div className="title">
        <span>STUDY-PLAN</span>
      </div>
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
                // width:'120px',
              }}
            />
          </div>
          {/* 타이머출력 위치 */}
          {timerFlag && <StudyTimer />}
        </div>
        <div className="button_form">
        {timerFlag && (
            <Button
              onClick={handleClick}
              style={{ borderRadius: "20px", background: "#fff" }}
            >
              작성하기
            </Button>
          )}
        </div>
        {planData.length ? (
          <ul className="study_list">
            {planData
              .filter(item => item.iuser === 2 && item.delYn !== 1)
              .map((item, index) => (
                <li key={index}>
                  <span className="study_list_title">
                    <p>
                      {item.icategory === 1 
                        ? "국어"
                        : item.icategory === 2
                        ? "수학"
                        : item.icategory === 3
                        ? "사회"
                        : item.icategory === 4
                        ? "과학"
                        : item.icategory === 5
                        ? "영어"
                        : "선택과목없음"}
                    </p>
                  </span>
                  <span className="study_list_text">
                    <p>{item.title}</p>
                    <div className="list_func">
                      <Button
                        onClick={() => handleSubmit(item.itodo, item.icategory)}
                        style={{ borderRadius: "25px", background: "#fff", color:"#000" }}
                      >
                        수정
                      </Button>
                      <Button
                        onClick={() =>
                          handleDeleteClick(item.itodo, item.iuser, item.delYn)
                        }
                        style={{ borderRadius: "20px", background: "#fff", color:"#000" }}
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
              <Button onClick={handleClick} style={{ borderRadius: "20px" }}>
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
