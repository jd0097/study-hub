import React, { useEffect, useState } from "react";
// import { putPlan } from "../api/planFetch"
import { useNavigate } from "react-router-dom";
import { Button, Input, Row, Space } from "antd";
import { putPlan } from "../api/planFetch";
import { StudyPlanDiv } from "../style/subjects";
import TextArea from "antd/es/input/TextArea";

const StudyListItem = ({
  selectday,
  planData,
  setPlanData,
  planLog,
  selectedSubject,
}) => {
  const navigate = useNavigate();

  // const [selectedSubject, setSelectedSubject] = useState();
  const [editTitle, setEditTitle] = useState("");
  const [editCtnt, setEditCtnt] = useState("");
  const [editCate, setEditCate] = useState(null);

  // // console.log(selectedSubject);
  // console.log(editTitle);
  // console.log(editCtnt);
  // console.log(planLog);

  const planTitle = planData.find(
    item => (item.itodo === planLog) & (item.iuser === 2),
  ).title;
  // console.log("타이틀======");
  // console.log(planTitle);

  // const sudbject = planData.find(
  // item => (item.icat === planLog) & (item.iuser === 2),).PlanSudbject
  // console.log("선택한 과목===========")
  // console.log(sudbject)

  const planCtnt = planData.find(
    item => (item.itodo === planLog) & (item.iuser === 2),
  ).ctnt;
  console.log("내용======");
  console.log(planCtnt);

  useEffect(() => {
    setEditTitle(planTitle);
    // setSelectedSubject(sudbject)
    setEditCtnt(planCtnt);
  }, [planTitle, planCtnt]);

  console.log(editTitle);
  console.log(editCtnt);

  const handlePutSubmit = planLog => {
    const newPlanData = planData.map(item => {
      if (item.iuser === 2 && item.itodo === planLog) {
        // item.sudbject = selectedSubject;
        item.title = editTitle;
        item.ctnt = editCtnt;
      }
      return item;
    });
    setPlanData(newPlanData);
    putPlan(planLog, editTitle, editCtnt, 2);
    navigate(`/studyplan/${selectday}`);
    // navigate("/studyplan");
  };

  return (
    <>
      <Row justify="center" style={{ margin: "30px 0" }}>
        <Input
          size="large"
          placeholder="큰 제목 입력"
          type="text"
          value={editTitle}
          onChange={e => setEditTitle(e.target.value)}
        />
      </Row>
      <Row justify="center" style={{ margin: "30px 0" }}></Row>
      <Row justify="center" style={{ margin: "30px 0" }}>
        <TextArea
          autoSize={{
            minRows: 5,
            maxRows: 7,
          }}
          value={editCtnt}
          onChange={e => setEditCtnt(e.target.value)}
          placeholder="내용 작성"
        ></TextArea>
      </Row>
      <Row justify="end" style={{ margin: "30px 0" }}>
        <Button
          onClick={() => handlePutSubmit(planLog)}
          style={{ borderRadius: "25px" }}
        >
          수정
        </Button>
      </Row>
    </>
  );
};

export default StudyListItem;
