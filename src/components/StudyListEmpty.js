import React, { useState } from "react";
import { postWrite } from "../api/planFetch";

const StudyListEmpty = () => {
  return (
    <div className="study_empty">
      <div className="study_empty_box">
        <span className="empty_notice">
          작성하신 스터디 플랜이 없습니다.
          <br />
          플랜을 작성해보세요
        </span>
        <button className="study_write"></button>
      </div>
    </div>
  );
};

export default StudyListEmpty;
