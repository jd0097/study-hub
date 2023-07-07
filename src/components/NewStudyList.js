import React, {  useEffect, useState } from "react";
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
    selectedSubject,
    setSelectedSubject,
  }) => {
    const navigate = useNavigate();

    const [planSudbject, setPlanSudbject] = useState("");
    const handleSubmit = e => {

      e.preventDefault();
      const newPlan = {
        ctnt: content,
        title: title,
        isticker: 1,
        icategory: setPlanSudbject,
        iuser: 2,
      }
  
      setPlanData([...planData, newPlan]);
      postWrite(newPlan);
      setTitle("");
      setPlanSudbject([])
      setContent("");
      navigate("/studyPlan");
    };
    
    // // 제목
    // const [title, setTitle] = useState("");

    // // 내용
    // const [content, setContent] = useState("");
    
    
    
    // const handleTitleChange = (e) => {
      //   setTitle(e.target.value);
      // };
      
      // const handleContentChange = (e) => {
        //   setContent(e.target.value);
        // };
        
        
        const handleClick = e => {
          setPlanSudbject(e.target.innerText);
          
        };
        
      
        useEffect (() => {
         
        },[])
        
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
          {/* <div style={{width: "100%", height: "100px", background: "skyblue" }}>
            {subject.map((item, index) => (
            <label key={index}>
              <input
                type="radio"
                name="sub"
                value={index}
                checked={selectSubject === index}
                onChange={handleChange}
              />
              {item.title}
            </label>
            ))}
            </div> */}
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



