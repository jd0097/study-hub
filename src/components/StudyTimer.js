import React, { useEffect, useState } from "react";
import { Button, Input, Space, Row } from "antd";
import { postMinute } from "../api/fetch";

const StudyTimer = () => {
  // =============== 타이머 만들기(정다혜)
  // 시간 출력을 위한 State
  const [studyTime, setStudyTime] = useState("");
  // 타이머를 만들고 지우기위한 State
  const [studyTimer, setStudyTimer] = useState(null);
  // 시간을 제기 위한 변수
  let timeSec = 0;
  let timeMin = 0;
  let timeHour = 0;
  // 공부시작
  const startStudy = () => {
    timeSec = 0;
    timeMin = 0;
    timeHour = 0;
    // 타이머는 중첩되면 안되므로 지우고 생성함.
    clearInterval(studyTimer);
    // setInterval 웹브라우저 함수를 통해서 타이머를 생성함.
    const timer = setInterval(() => {
      timeSec += 1;
      if (timeSec >= 60) {
        timeSec = 0;
        timeMin += 1;
      }
      if (timeMin >= 60) {
        timeMin = 0;
        timeHour += 1;
      }
      // 출력할 글자 만들기
      setStudyTime(
        timeHour.toString().padStart(2, "0") +
          ":" +
          timeMin.toString().padStart(2, "0") +
          ":" +
          timeSec.toString().padStart(2, "0"),
      );
    }, 1000);
    setStudyTimer(timer);
  };

  // 공부멈춤;
  const stopStudy = () => {
    clearInterval(studyTimer);
    // 서버로 분으로 보내기
    // studyTime 에는 "00:03:01"
    const timeArr = studyTime.split(":");
    // timeArr = ["00", "03", "01"]
    const totalMinutes =
      parseInt(timeArr[0]) * 60 +
      parseInt(timeArr[1]) +
      Math.floor(parseInt(timeArr[2]) / 60);
    // axios 로 공부한 시간(분)의 정보를 전달함.
    postMinute(totalMinutes);
  };
  useEffect(() => {
    return () => {
      // cleanup 함수: 컴포넌트가 화면에서 사라질때 실행되는 함수
      clearInterval(studyTimer);
    };
  }, [studyTimer]);
  // ===============// 타이머 만들기
  return (
    <div className="timer">
      {/* 타이머가 들어갑니다. */}
      <div className="time_box">
        <Input
          value={studyTime}
          placeholder="00:00:00"
          style={{ textAlign: "center" }}
        />
      </div>
      <div className="time_select">
        <Button onClick={startStudy}>시작</Button>
        <Button onClick={stopStudy}>정지</Button>
      </div>
    </div>
  );
};

export default StudyTimer;
