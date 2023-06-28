import React from "react";
import { useNavigate } from "react-router";

const NoteWrite = () => {
  const navigate = useNavigate();
  const handleConfirm = () => {
    navigate("/note");
  };
  return (
    <div className="note_write">
      <form className="note_form">
        <input
          type="text"
          placeholder="메모 제목을 입력해주세요"
          className="memo_title"
        ></input>
        <ul className="option_list">
          <li></li>
        </ul>
        <textarea className="memo_text"></textarea>
        <button className="confirm" onClick={handleConfirm}>
          완료
        </button>
      </form>
    </div>
  );
};

export default NoteWrite;
