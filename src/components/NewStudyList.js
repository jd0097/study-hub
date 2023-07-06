import React, {  useState } from "react";
import { Button, Input, Space, Row } from "antd";
import { postWrite } from "../api/planFetch";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const StudyWrite = ({
    planData,
    setPlanData,
    title,
    setTitle,
    content,
    setContent,
    setPlanText,
  }) => {
    const navigate = useNavigate();
  
    const handleSubmit = e => {
      e.preventDefault();
      const newPlan = {
        ctnt: content,
        title: title,
        isticker: 0,
        icategory: 0,
        iuser: 2,
      }
  
      setPlanData([...planData, newPlan]);
      postWrite(newPlan);
      setTitle("");
      setContent("");
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
  

//   const handleClick = e => {
//     setSelectedSubject(e.target.value);
    
//   };

  const subjects = ["국어", "영어", "수학", "과학", "사회"];

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



