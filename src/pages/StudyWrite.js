import React, { useEffect, useState } from "react";
import { Button, Input, Space, Row } from "antd";
import { postWrite } from "../api/planFetch";
// import { Navigate, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const StudyWrite = ({
  planData,
  setPlanData,
  planTitle,
  setPlanTitle,
  planText,
  setPlanText,
  planLog,
  setPlanLog,
  planIndex,
  setplanIndex,
  profile
}) => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // axios 로 planWrite정보를 전달함.
    //확인하기 
    const newPlan = {
      ctnt: planText,
      title: planTitle,
      isticker: 0,
      icategory: 0,
      iuser: 2,
    }
    // postWrite({
    //   ctnt: planText,
    //   title: planTitle,
    //   isticker: 0,
    //   icategory: 0,
    //   iuser: 2,
    // });
  
  //   // postSubjects({
  //   // });

  setPlanData([...planData,newPlan]);
  postWrite(newPlan)
  setPlanTitle("")
  setPlanText("")
  navigate("/studyPlan");
  };

  
  // // 제목
  // const [title, setTitle] = useState("");
  // 과목
  const [selectedSubject, setSelectedSubject] = useState("");
  // // 내용
  // const [content, setContent] = useState("");
  

  
  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };
  
  // const handleContentChange = (e) => {
  //   setContent(e.target.value);
  // };
  
  const handleClick = (e) => {
    setSelectedSubject(e.target.value);
  };
  

  const subjects = ["국어", "영어", "수학", "과학", "사회"];

  return (
    <div className="study_plan_warp">
      <h1 className="title">STUDY-PLAN</h1>
      <div className="study_inner">
        <div style={{ width: "90%", margin: "0 auto" }}>
          <Row justify="center" style={{ margin: "30px 0" }}>
            <Input
              size="large"
              placeholder="큰 제목 입력"
              type="text"
              value={planTitle}
              onChange={e => setPlanTitle(e.target.value)}
            />
          </Row>
          <Row justify="center" style={{ margin: "30px 0" }}>
            <Space wrap>
              {subjects.map((subject, index) => (
                <Button
                  key={subject}
                  value={index}
                  onClick={ handleClick }
                  className={setPlanText=== subject ? "selected" : ""}
                  style={{ borderRadius: "25px" }}
                >
                  {subject}
                </Button>
              ))}
            </Space>
          </Row>
          <Row justify="center" style={{ margin: "30px 0" }}>
            <TextArea
              autoSize={{
                minRows: 5,
                maxRows: 7,
              }}
              value={planText}
              onChange={e => setPlanText(e.target.value)}
              placeholder="내용 작성"
            ></TextArea>
          </Row>
          <Row justify="end" style={{ margin: "30px 0" }}>
            <Button onClick={handleSubmit} style={{ borderRadius: "25px" }}>
              게시물 생성
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default StudyWrite;