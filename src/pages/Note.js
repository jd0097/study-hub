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
  profile,
}) => {
  const navigate = useNavigate();

  // 이거 누르지맙시다 지금은
  const handleRemoveClick = e => {
    e.preventDefault();
    // setMemoData([]);
    // deleteAllTodo();
  };

  // 새작성
  const handleClick = () => {
    navigate("/notewrite");
    setMemoLog("");
  };

  const handleDeleteClick = _imemo => {
    console.log(_imemo);
    const deleteMemoData = memoData.filter(item => item.imemo !== _imemo);
    setMemoData(deleteMemoData);
    deleteMemo(_imemo);
  };

  // 데이터 수정
  const handlesome = _imemo => {
    setMemoLog(_imemo);
    navigate("/notewrite");
  };

  useEffect(() => {
    console.log(memoData);
  }, [memoData]);

  // useEffect(() => {}, [memoIndex]);

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

                      <button onClick={() => handleDeleteClick(item.imemo)}>
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
