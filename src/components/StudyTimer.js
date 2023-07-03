import React, { useEffect, useState } from "react";
import { Button, Input, Space, Row } from "antd";
import { postMinute } from "../api/fetch";

const StudyTimer = () => {
  // =============== 타이머 만들기
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    handleReset();
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  // 공부멈춤;
  const handleStop = () => {
    handlePause();
    // 서버로 분으로 보내기
    // studyTime 에는 "00:03:01"
    const timeArr = studyTime.split(":");
    // timeArr = ["00", "03", "01"]
    const totalMinutes =
      parseInt(timeArr[0]) * 3600 +
      parseInt(timeArr[1]) * 60 +
      parseInt(timeArr[2]);
    console.log(totalMinutes);
    // axios 로 공부한 시간(분)의 정보를 전달함.
    // postMinute(totalMinutes);
  };
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes(prevMinutes => prevMinutes + 1);
    }
    if (minutes === 60) {
      setMinutes(0);
      setHours(prevHours => prevHours + 1);
    }
    setStudyTime(
      hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0"),
    );
  }, [seconds, minutes]);
  // 시간 출력을 위한 State
  const [studyTime, setStudyTime] = useState("");

  // ===============// 타이머 만들기
  return (
    <div className="timer">
      {/* 타이머가 들어갑니다. */}
      <div className="time_box">
        <Input
          value={studyTime}
          placeholder="00:00:00"
          style={{
            textAlign: "center",
            borderRadius: "unset",
            borderStyle: "unset",
          }}
        />
      </div>
      <div className="time_select">
        {isRunning ? (
          <div>
            <Button onClick={handlePause} style={{ borderRadius: "25px" }}>
              일시중지
            </Button>
            {/* <Button onClick={handleReset} style={{ borderRadius: "25px" }}>
              Reset
            </Button> */}
            <Button onClick={handleStop} style={{ borderRadius: "25px" }}>
              정지
            </Button>
          </div>
        ) : (
          <Button onClick={handleStart} style={{ borderRadius: "25px" }}>
            시작
          </Button>
        )}
      </div>
    </div>
  );
};

export default StudyTimer;