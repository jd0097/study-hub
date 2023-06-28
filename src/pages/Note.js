import React from "react";
import { useNavigate } from "react-router";

const Note = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/notewrite");
  };
  return (
    <div className="note_wrap">
      <ul className="nav_path">
        <li></li>
      </ul>
      <div className="title_box">
        {}
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
  );
};

export default Note;
