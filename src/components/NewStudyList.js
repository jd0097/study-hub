import React, { useEffect, useState } from "react";
import { Button, Input, Space, Row } from "antd";
import { postWrite } from "../api/planFetch";
import { useNavigate, useParams } from "react-router-dom";
import { StudyPlanDiv } from "../style/subjects";

const { TextArea } = Input;
const StudyWrite = ({
  selectday,
  planData,
  setPlanData,
  title,
  setTitle,
  content,
  setContent,
  setPlanText,
  category,
  setCategory,
  selectedSubject,
  setSelectedSubject,
}) => {
  const navigate = useNavigate();

  // console.log(category);

  // console.log(selectedSubject);

  const handleSubmit = async e => {
    const newPlan = {
      ctnt: content,
      title: title,
      isticker: 1,
      icategory: selectedSubject,
      iuser: 2,
    };

    alert(selectedSubject);

    console.log("newPlan : ", newPlan);
    // setPlanData([...planData, newPlan]);
    await postWrite(newPlan);
    // setTitle("");
    // setContent("");
    // navigate("/studyPlan");
    navigate(`/studyplan/${selectday}`);
    // window.location.reload();
  };

  // // 제목
  // const [title, setTitle] = useState("");
  // 과목

  // // 내용
  // const [content, setContent] = useState("");

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleContentChange = (e) => {
  //   setContent(e.target.value);
  // };

  //   const handleClick = e => {
  //     setSelectedSubject(e.target.value);

  //   };
  const handleChange = e => {
    setSelectedSubject(e.target.value);
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
        <StudyPlanDiv>
          {category.slice(0, 5).map((item, index) => (
            <label
              key={index}
              htmlFor={`catagoey-${index}`}
              className={`cate_list ${
                selectedSubject === index ? "active" : ""
              }`}
            >
              <input
                id={`catagoey-${index}`}
                type="radio"
                name="cate"
                value={index}
                checked={selectedSubject === index}
                onChange={handleChange}
                className="cate_input"
              />
              {item.title}
            </label>
          ))}
        </StudyPlanDiv>
        {/* <Space wrap>
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
