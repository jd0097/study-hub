import React from "react";

const Note = () => {
  return (
    <div className="note_wrap">
      <div className="title_box">
        <span>
          작성하신 메모가 없습니다.
          <br />
          메모를 작성해보세요
        </span>
        <button className="memo_button">메모작성하기</button>
      </div>
    </div>
  );
};

export default Note;
