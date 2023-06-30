import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAllTodo, deleteMemo } from "../api/fetch";
import NoteWrite from "./NoteWrite";

const Note = ({
  memoData,
  setMemoData,
  memoLog,
  setMemoLog,
  memoIndex,
  setMemoIndex,
}) => {
  const navigate = useNavigate();

  const handleRemoveClick = () => {
    setMemoData([]);
    deleteAllTodo();
  };

  const handleClick = () => {
    navigate("/notewrite");
    setMemoLog("");
  };

  const handleDeleteClick = _id => {
    const newMomoData = memoData.filter(item => item.iuser !== _id);
    setMemoData(newMomoData);
    deleteMemo(_id);
  };

  const handlesome = (_id, index) => {
    const log = memoData.find(item => item.iuser === _id);
    setMemoLog(_id);
    const mindex = index;
    console.log(mindex);
    setMemoIndex(memoIndex);
    if (log) {
      setMemoIndex(index);
    }
    navigate("/notewrite");
  };

  useEffect(() => {}, [memoIndex]);

  // const handleListItemClick = (index, _id) => {
  //   handleThisIndex(index);
  // };

  return (
    <div className="note_wrap">
      <h1 className="title">메모</h1>
      <div className="note_wrap_inner">
        <div className="button_form">
          <button onClick={handleRemoveClick}>전체삭제</button>
          <button onClick={handleClick}>작성하기</button>
        </div>
        {memoData.length ? (
          <ul className="note_list">
            {memoData.map((item, index) => (
              <li key={index}>
                <span className="note_list_title">{item.title}</span>
                <span className="note_list_text">
                  <p>{item.ctnt}</p>
                  <div className="list_func">
                    <button onClick={() => handlesome(item.iuser, index)}>
                      수정
                    </button>
                    <button onClick={() => handleDeleteClick(item.iuser)}>
                      삭제
                    </button>
                  </div>
                </span>
              </li>
            ))}
          </ul>
        ) : (
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
        )}
      </div>
      {/* {log && <NoteWrite log={log} />} */}
    </div>
  );
};

export default Note;
