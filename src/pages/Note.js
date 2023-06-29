import React, { useState } from "react";
import { useNavigate } from "react-router";
import { deleteAllTodo, deleteMemo } from "../api/axios/axios";
import NoteWrite from "./NoteWrite";

const Note = ({ memoData, setMemoData }) => {
  const [log, setLog] = useState(null);
  const navigate = useNavigate();

  const handleRemoveClick = () => {
    setMemoData([]);
    deleteAllTodo();
  };

  const handleClick = () => {
    navigate("/notewrite");
  };

  const handleDeleteClick = _id => {
    const newMomoData = memoData.filter(item => item.id !== _id);
    setMemoData(newMomoData);
    deleteMemo(_id);
  };

  const handlesome = _id => {
    const log = memoData.find(item => item.id === _id);
    if (log) {
      console.log(log.id);
      console.log(_id);
      setLog(log);
      handleExternalId(_id);
    }
  };

  const handleExternalId = _id => {
    console.log(_id);
  };

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
              <li key={index} onClick={() => handlesome(item.id)}>
                <span className="note_list_title">{item.title}</span>
                <span className="note_list_text">
                  <p>{item.text}</p>
                  <div className="list_func">
                    <button>수정</button>
                    <button onClick={() => handleDeleteClick(item.id)}>
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
