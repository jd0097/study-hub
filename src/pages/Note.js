
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteMemo } from "../api/memoFetch";


const Note = ({
  memoLog,
  memoUser,
  setMemoUser,
  memoData,
  setMemoData,
  setMemoLog,
  memoIndex,
  setMemoIndex,
  profile,
}) => {
  const navigate = useNavigate();

  // 이거 누르지맙시다 지금은
  const handleRemoveClick = e => {
    e.preventDefault();
    // setMemoData([]);
    // deleteAllTodo();
  };

  const handleClick = () => {
    navigate("/notewrite");
    setMemoLog("");
  };

  const handleDeleteClick = (_iuser, _imemo) => {
    console.log(_iuser);
    console.log(_imemo);
    // const deleteMemoData = memoData.map(item => {
    //   if (item.iuser === _iuser && item.imemo === _imemo) {
    //     item.imemo = _imemo;
    //   }
    // });
    deleteMemo(_imemo);
    // const newMomoData = memoData.filter(item => item.iuser !== _id);
    // setMemoData(newMomoData);
    // deleteMemo(_id);
  };

  const handlesome = _imemo => {
    setMemoLog(_imemo);
    navigate("/notewrite");
  };

  useEffect(() => {}, [memoIndex]);

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
            {memoData
              .filter(item => item.iuser === 2)
              .map((item, index) => (
                <li key={index}>
                  <span className="note_list_title">
                    <p>{item.title}</p>
                  </span>
                  <span className="note_list_text">
                    <p>{item.ctnt}</p>
                    <div className="list_func">
                      <button onClick={() => handlesome(item.imemo)}>
                        수정
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteClick(item.iuser, item.imemo)
                        }
                      >

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
