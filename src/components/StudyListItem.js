
import React, { useEffect, useState } from "react";
// import { putPlan } from "../api/planFetch"
import { useNavigate } from "react-router-dom";
import { Button, Row } from "antd";



const StudyListItem = ({planData, setPlanData, item, planLog }) => {
      const navigate = useNavigate();

      // const [selectedSubject, setSelectedSubject] = useState();
      const [editTitle, setEditTitle] = useState("");
      const [editCtnt, setEditCtnt] = useState("");


      // console.log(selectedSubject);
      console.log(editTitle);
      console.log(planLog);
      // console.log(editCtnt);

      const title = planData.find(
        item => (item.itodo === planLog) & (item.iuser === 2),).PlanTitle
        console.log("타이틀======")
        console.log(title)
        

        // const sudbject = planData.find(
        // item => (item.icat === planLog) & (item.iuser === 2),).PlanSudbject
        // console.log("선택한 과목===========")
        // console.log(sudbject)



        const ctnt = planData.find(
          item => (item.itodo === planLog) & (item.iuser === 2),).PlanCtnt
          console.log("내용======")
          console.log(ctnt)

        useEffect(() => {
            setEditTitle(title)
            // setSelectedSubject(sudbject)
            setEditCtnt(ctnt)
        },[title,ctnt])
        

        const handlePutSubmit = planLog => {
          console.log(item.iuser)
          const newPlanData = planData.map(item => {
            if (item.iuser === 2 && item.itodo === planLog) {
            // item.sudbject = selectedSubject;
            item.title = editTitle;
            // item.ctnt = editCtnt
          } return item;
          })
          setPlanData(newPlanData)
          // putPlan(planLog, editTitle, 2)
          navigate("/studyplan")
        };

  return (
    <>
    <></>
    <Row justify="center" style={{ margin: "30px 0" }}>
            <Button  onClick={() => handlePutSubmit(planLog, item.iuser)} style={{borderRadius:"25px"}}>수정</Button>
          </Row>
    </>
     
  );
};

export default StudyListItem;
