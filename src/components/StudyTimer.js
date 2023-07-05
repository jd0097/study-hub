import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { postSeconds } from "../api/planFetch";

const StudyTimer = () => {
  // 시간 문자열
  const [studyTime, setStudyTime] = useState("");

  // 초
  const [seconds, setSeconds] = useState(0);
  // 분
  const [minutes, setMinutes] = useState(0);
  // 시간
  const [hours, setHours] = useState(0);
  // 타이머 작동
  const [isRunning, setIsRunning] = useState(false);
  // 타이머 일시멈춤
  const [isPaused, setIsPaused] = useState(false);
  // 타이머 정지
  const [isStopped, setIsStopped] = useState(false);

  // 타이머 시작
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // 문자열 계산 출력
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

  // 타이머 초기화
  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setIsStopped(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  // 시작버튼
  const handleStart = () => {
    handleReset();
    // 타이머 작동
    setIsRunning(true);
    setIsPaused(false);
    setIsStopped(false);
  };
  // 일시멈춤
  const handlePause = () => {
    setIsRunning(false);
    setIsPaused(true);
    setIsStopped(false);
  };

  // 타이머 정지
  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setIsStopped(true);
    const timeArr = studyTime.split(":");
    const totalSeconds =
      parseInt(timeArr[0]) * 3600 +
      parseInt(timeArr[1]) * 60 +
      parseInt(timeArr[2]);
    // console.log(totalSeconds);
    // axios 로 공부한 시간(초)의 정보를 전달함.
    postSeconds({
      studyLine: totalSeconds,
      iuser: 2,
    });
  };

  // 타이머 멈췄다가 계속 진행
  const handleResume = () => {
    setIsRunning(true);
    setIsPaused(false);
    setIsStopped(false);
  };

  return (
    <div className="timer">
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
        {!isRunning && !isStopped && !isPaused && (
          <div>
            <Button onClick={handleStart} style={{ borderRadius: "25px" }}>
              시작
            </Button>
          </div>
        )}
        {isRunning && !isStopped && !isPaused && (
          <div>
            <Button onClick={handlePause} style={{ borderRadius: "25px" }}>
              일시정지
            </Button>
            <Button onClick={handleStop} style={{ borderRadius: "25px" }}>
              정지
            </Button>
          </div>
        )}
        {!isRunning && !isStopped && isPaused && (
          <div>
            <Button onClick={handleResume} style={{ borderRadius: "25px" }}>
              재실행
            </Button>
            <Button onClick={handleStop} style={{ borderRadius: "25px" }}>
              정지
            </Button>
          </div>
        )}
        {!isRunning && isStopped && !isPaused && (
          <div>
            <Button onClick={handleStart} style={{ borderRadius: "25px" }}>
              시작
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyTimer;