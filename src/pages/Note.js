import React from "react";
import { useNavigate } from "react-router";

const Note = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/notewrite");
  };
  return (
    <div className="note_wrap">
      <h1 className="title">메모</h1>
      <div className="note_wrap_inner">
        <div className="title_box">
          <span>
            작성하신 메모가 없습니다.
            <br />
            메모를 작성해보세요
          </span>
          <button className="memo_button" onClick={handleClick}>
            메모작성하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
