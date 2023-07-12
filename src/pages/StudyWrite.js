import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input, Space, Row } from "antd";
import StudyListItem from "../components/StudyListItem";
import NewStudyList from "../components/NewStudyList";

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
  profile,
  category,
  setCategory,
  selectedSubject,
  setSelectedSubject,
  savedSubject,
  setSavedSubject,
}) => {
  const { selectday } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  // // 제목
  // const [title, setTitle] = useState("");
  // 과목
  // const [selectedSubject, setSelectedSubject] = useState("");
  // // 내용
  // const [content, setContent] = useState("");

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleContentChange = (e) => {
  //   setContent(e.target.value);
  // };

  // const handleClick = (e) => {
  //   setSelectedSubject(e.target.value);
  // };

  return (
    <div className="study_plan_warp">
      <h1 className="title">STUDY-PLAN</h1>
      <div className="study_inner">
        <div style={{ width: "90%", margin: "0 auto" }}>
          {/* studyPlan 있다 */}
          {planLog ? (
            <StudyListItem
            selectday={selectday}
              planData={planData}
              planLog={planLog}
              setPlanData={setPlanData}
              category={category}
              setCategory={setCategory}
              selectedSubject={selectedSubject}
              setSelectedSubject={setSelectedSubject}
            />
          ) : (
            //없다.
            <NewStudyList
            selectday={selectday}
              planData={planData}
              setPlanData={setPlanData}
              title={title}
              setTitle={setTitle}
              content={content}
              setContent={setContent}
              setPlanText={setPlanText}
              category={category}
              setCategory={setCategory}
              selectedSubject={selectedSubject}
              setSelectedSubject={setSelectedSubject}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyWrite;
