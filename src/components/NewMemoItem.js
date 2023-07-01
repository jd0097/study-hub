import React from "react";
import { postMemo } from "../api/fetch";
import { useNavigate } from "react-router-dom";

const NewMemoItem = ({
  memoData,
  setMemoData,
  setValue,
  value,
  text,
  setText,
}) => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newMemo = {
      iuser: Date.now(),
      title: value,
      ctnt: text,
    };

    setMemoData([...memoData, newMemo]);
    postMemo(newMemo);
    setValue("");
    setText("");
    navigate("/note");
  };

  const handleTextChange = e => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="title_input"
        placeholder="제목을 입력해주세요"
        name="value"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <textarea
        className="note_text"
        value={text}
        onChange={handleTextChange}
      />
      <button type="button" className="confirm" onClick={handleSubmit}>
        완료
      </button>
    </>
  );
};

export default NewMemoItem;
