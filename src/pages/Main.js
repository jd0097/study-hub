import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';


const Main = () => {
  return (
    <div className="home_wrap">
      <h1 className="title">HOME</h1>
      <div className="banner_box">
        <div className="banner">
          <h1><FontAwesomeIcon icon={faNoteSticky}/> MY NOTE</h1>
          <span>오늘 생각과 아이디어를 자유롭게 적어보세요</span>
        </div>
        <div className="banner">
          <h1><FontAwesomeIcon icon={faClipboardList}/> STUDY-PLAN</h1>
          <span>계획하신 스터디 플랜이 있으신가요?</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
