import React, { useState } from "react";
import { useNavigate } from "react-router";

import MemoItem from "../components/MemoItem";
import NewMemoItem from "../components/NewMemoItem";
import MemoModal from "../components/MemoModal";

const NoteWrite = ({ memoData, setMemoData, memoLog }) => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="note_write">
      <div className="title">
        <span>메모작성</span>
      </div>
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
