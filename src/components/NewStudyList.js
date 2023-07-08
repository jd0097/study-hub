import React, { useState } from "react";
import { Button, Input, Space, Row } from "antd";
import { postWrite } from "../api/planFetch";
import { useNavigate } from "react-router-dom";
import { SubjectList } from "../style/subjects";

const { TextArea } = Input;
const StudyWrite = ({
  planData,
  setPlanData,
  title,
  setTitle,
  content,
  setContent,
  setPlanText,
  subject,
  setSubject,
  selectSubject,
  setselectSubject,
}) => {
  const navigate = useNavigate();

  console.log(selectSubject);

  const handleSubmit = e => {
    e.preventDefault();
    const newPlan = {
      ctnt: content,
      title: title,
      isticker: 1,
      icategory: selectSubject,
      iuser: 2,
    };

    setPlanData([...planData, newPlan]);
    postWrite(newPlan);
    setTitle("");
    setContent("");
    navigate("/studyPlan");
  };

  const handleChange = e => {
    const selectedIndex = parseInt(e.target.value, 10);
    setselectSubject(selectedIndex);
    console.log(selectSubject);
  };

  return (
    <>
      <Row justify="center" style={{ margin: "30px 0" }}>
        <Input
          size="large"
          placeholder="큰 제목 입력"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Row>
      <Row justify="center" style={{ margin: "30px 0" }}>
        <SubjectList>
          {subject.map((item, index) => (
            <label key={index} htmlFor="sub" className="subject_label">
              <input
                type="radio"
                name="sub"
                id="sub"
                value={index}
                checked={selectSubject === index}
                onChange={handleChange}
              />
              {item.title}
            </label>
          ))}
        </SubjectList>
        {/* <Space wrap>
          {subject.map((item, index) => (
            <Button
              key={index}
              value={item}
              onClick={handleClick}
              className={setPlanText === subject ? "selected" : ""}
              style={{ borderRadius: "25px" }}
            >
              이게 어디있나요?
            </Button>
          ))}
        </Space> */}
      </Row>
      <Row justify="center" style={{ margin: "30px 0" }}>
        <TextArea
          autoSize={{
            minRows: 5,
            maxRows: 7,
          }}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="내용 작성"
        ></TextArea>
      </Row>
      <Row justify="end" style={{ margin: "30px 0" }}>
        <Button onClick={handleSubmit} style={{ borderRadius: "25px" }}>
          게시물 생성
        </Button>
      </Row>
    </>
  );
};

export default StudyWrite;
