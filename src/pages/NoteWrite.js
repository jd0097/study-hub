import { postMemo } from "../api/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const NoteWrite = ({ memoData, setMemoData, memoTitle, memoText, log }) => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = e => {
    const newMemo = {
      id: Date.now(),
      title: value,
      text: text,
    };

    setMemoData([...memoData, newMemo]);
    postMemo(newMemo);
    setValue("");
    setText("");
    console.log("post");

    navigate("/note");
    e.preventDefault();
  };

  const handleTextChange = e => {
    setText(e.target.value);
  };

  if (log === log) {
    console.log(value);
  }
  return (
    <div className="note_write">
      <h1 className="title">메모작성</h1>
      <div className="note_inner">
        <form className="note_form">
          <input
            type="text"
            className="title_input"
            placeholder="제목을 입력해주세요"
            name="value"
            value={value}
            onChange={e => setValue(e.target.value)}
          ></input>
          <textarea
            className="note_text"
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <button type="button" className="confirm" onClick={handleSubmit}>
            완료
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteWrite;
