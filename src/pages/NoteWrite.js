import React, { useState } from "react";
import { useNavigate } from "react-router";

import MemoItem from "../components/MemoItem";
import NewMemoItem from "../components/NewMemoItem";

const NoteWrite = ({
  memoData,
  setMemoData,
  memoLog,

}) => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="note_write">
      <h1 className="title">메모작성</h1>
      <div className="note_inner">
        <form className="note_form">
          {/* 내가 선택한 로그가 있다 */}
          {memoLog ? (
            <MemoItem
              memoData={memoData}
              setMemoData={setMemoData}
              memoLog={memoLog}
            />
          ) : (
            // 로그가 없다.
            <NewMemoItem
              memoData={memoData}
              setMemoData={setMemoData}
              value={value}
              setValue={setValue}
              text={text}
              setText={setText}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default NoteWrite;