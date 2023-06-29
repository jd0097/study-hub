import React from "react";

const Mypages = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="mypage_wrap">
      <div className="account_box">
        <div className="account_img">
          <img src={`${path}/source/default.png`}></img>
          <button className="img_change">수정</button>
        </div>
        <span className=" user_name">마우스</span>
        <form className="account_change">
          <button className="name_change">이름 수정</button>
          <input type="text" className="name_input"></input>
        </form>
      </div>
    </div>
  );
};

export default Mypages;
