import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteMemo, deleteAllTodo } from "../api/memoFetch";

const Note = ({
  Modal,
  isModal,
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

  // 전체삭제 기능
  const handleRemoveClick = () => {
    // const deleteAllMemo = memoData.filter(item => item.iuser === 2);
    // deleteAllMemo.forEach(item => {
    //   deleteAllTodo(item.imemo);
    // });
    // setMemoData([]);
    isModal(true);
    console.log(Modal);
  };

  // 새작성
  const handleClick = () => {
    navigate("/notewrite");
    setMemoLog("");
  };

  // 일부 삭제 기능
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
      <div className="title">
        <span>메모</span>
      </div>
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
                          handleDeleteClick(item.imemo, item.iuser)
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
