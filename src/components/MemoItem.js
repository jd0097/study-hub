import React, { useEffect, useState } from "react";

import { patchMemo } from "../api/memoFetch";
import { useNavigate } from "react-router-dom";

const MemoItem = ({ memoData, setMemoData, item, memoLog }) => {
  const navigate = useNavigate();

  const [editTitle, setEditTitle] = useState("");
  const [editctnt, setEditCtnt] = useState("");

  console.log(editTitle);
  console.log(editctnt);
  console.log(memoLog);

  const title = memoData.find(
    item => (item.imemo === memoLog) & (item.iuser === 2),).title;
  console.log("타이틀" + title);

  const ctnt = memoData.find(
    item => (item.imemo === memoLog) & (item.iuser === 2),
  ).ctnt;
  console.log("ctnt 는" + ctnt);

  useEffect(() => {
    setEditCtnt(ctnt);
    setEditTitle(title);
  }, [title, ctnt]);

  const handlePatchSubmit = memoLog => {
    console.log("아이유저" + item.iuser);
    const newMemoData = memoData.map(item => {
      if (item.iuser === 2 && item.imemo === memoLog) {
        item.title = editTitle;
        item.ctnt = editctnt;
      }
      return item;
    });
    setMemoData(newMemoData);
    patchMemo(memoLog, editTitle, editctnt, 2);
    navigate("/note");
  };

  return (
    <>
      <input
        type="text"
        className="title_input"
        name="value"
        value={editTitle}
        onChange={e => setEditTitle(e.target.value)}
      ></input>
      <textarea
        className="note_text"
        value={editctnt}
        onChange={e => setEditCtnt(e.target.value)}
      ></textarea>
      <button
        type="button"
        className="confirm"
        onClick={() => handlePatchSubmit(memoLog, item.iuser)}
      >
        수정완료
      </button>
    </>
  );
};

export default MemoItem;
