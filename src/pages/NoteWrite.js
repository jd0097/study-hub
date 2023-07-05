import React, { useState } from "react";
import { useNavigate } from "react-router";

import MemoItem from "../components/MemoItem";
import NewMemoItem from "../components/NewMemoItem";

const NoteWrite = ({
  profile,
  memoData,
  setMemoData,
  memoLog,
  memoIndex,
  memoUser,
}) => {
  const navigate = useNavigate();
  

  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="note_write">
      <h1 className="title">메모작성</h1>
      <div className="note_inner">
        <form className="note_form">
          {memoLog ? (
            <MemoItem
              memoIndex={memoIndex}
              memoData={memoData}
              setMemoData={setMemoData}
              setValue={setValue}
              text={text}
              setText={setText}
              item={memoData[2]}
              memoLog={memoLog}
              profile={profile}
            />
          ) : (
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
