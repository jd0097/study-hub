import { getMemo, postMemo, patchMemo } from "../api/fetch";
import React, { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import MemoItem from "../components/MemoItem";

const NoteWrite = ({
  memoData,
  setMemoData,
  memoTitle,
  memoText,
  log,
  setMemoLog,
  memoLog,
  memoIndex,
  setMemoIndex,
  memoId,
  setMemoId,
}) => {
  const navigate = useNavigate();

  // const [editTitle, setEditTitle] = useState(item.title);
  // const [editctnt, setEditCtnt] = useState(item.ctnt);

  console.log("메모로그" + memoLog);
  console.log("메모데이터" + (memoData.length > 0 ? memoData[0].title : ""));
  console.log("메모인덱스" + memoIndex);

  // if (memoLog) {
  //   alert("메모로그가 있습니다!!");
  // } else {
  //   alert("메모로그가 없습니다!!");
  // }

  // const param = useParams();
  // console.log(param.listid);

  // console.log(memoLog);
  // console.log(memoData);
  // console.log(momoIndex);

  // const MemoLength = memoData.length

  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  // const handlePatchSubmit = e => {
  //   let newMemo = memoData.map(item => {
  //     if (item.id === memoIndex) {
  //       item.title = editTitle;
  //       item.ctnt = editctnt;
  //     }
  //   });
  //   setMemoData(newMemo);

  //   patchMemo(_iuser, editTitle);
  // };

  // Post 기능입니다.
  const handleSubmit = e => {
    const newMemo = {
      iuser: Date.now(),
      title: value,
      ctnt: text,
    };

    setMemoData([...memoData, newMemo]);
    postMemo(newMemo);
    setValue("");
    setText("");
    console.log("post");

    // navigate(`/note/${newMemo.id}`);
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
          {memoLog ? (
            <MemoItem
              memoIndex={memoIndex}
              memoData={memoData}
              setMemoData={setMemoData}
              setValue={setValue}
              text={text}
              setText={setText}
              item={memoData[memoIndex]}
            />
          ) : (
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
          )}
        </form>
      </div>
    </div>
  );
};

export default NoteWrite;
