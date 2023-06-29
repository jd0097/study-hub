import React from "react";
import { useNavigate } from "react-router";

const NoteWrite = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/note");
  };
  return (
    <div className="note_write">
      <h1 className="title">메모작성</h1>
      <div className="note_inner">
        <form className="note_form">
          <input
            type="text"
            className="title_input"
            placeholder="제목을 입력해주세요"
          ></input>
          <textarea className="note_text"></textarea>
          <button className="confirm" onClick={handleClick}>
            완료
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteWrite;
