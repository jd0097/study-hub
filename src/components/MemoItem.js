import React, { useState } from "react";
import { patchMemo } from "../api/fetch";
import { useNavigate } from "react-router-dom";

const MemoItem = ({
  memoIndex,
  memoData,
  setMemoData,
  setValue,
  text,
  setText,
  item,
}) => {
  const navigate = useNavigate();
  const [editTitle, setEditTitle] = useState(item.title);
  const [editctnt, setEditCtnt] = useState(item.ctnt);

  const handlePatchSubmit = _iuser => {
    const newMemoData = memoData.map((item, index) => {
      if (index === memoIndex) {
        return {
          ...item,
          title: editTitle,
          ctnt: editctnt,
        };
      }
      return item;
    });
    setMemoData(newMemoData);
    patchMemo(_iuser, editTitle);
    navigate("/note");
  };

  return (
    <>
      <input
        type="text"
        className="title_input"
        name="value"
        value={memoIndex !== null ? memoData[memoIndex].title : ""}
        onChange={e => setEditTitle(e.target.value)}
      ></input>
      <textarea
        className="note_text"
        value={memoIndex !== null ? memoData[memoIndex].ctnt : ""}
        onChange={e => setEditCtnt(e.target.value)}
      ></textarea>
      <button
        type="button"
        className="confirm"
        onClick={() => handlePatchSubmit(item.iuser)}
      >
        수정완료
      </button>
    </>
  );
};

export default MemoItem;
