import React, { useEffect, useRef, useState } from "react";
import { putProfile } from "../api/userFatch";
import { useNavigate } from "react-router";
const UserInfo = ({
  profile,
  setProfile,
  editName,
  setEditName,
  editGoal,
  setEditGoal,
  editImg,
  setEditImg,
  editEmail,
  setEditEmail,
}) => {
  const navigate = useNavigate();

  const userNameRef = useRef(null);
  const userGoalRef = useRef(null);
  const userEmailRef = useRef(null);
  const userInputNameRef = useRef(null);
  const userInputGoalRef = useRef(null);
  const userInputEmailRef = useRef(null);
  const profileChangeBtn = useRef(null);
  const profileSubmitBtn = useRef(null);

  const handleChange = e => {
    e.preventDefault();
    userNameRef.current.style.display = "none";
    userInputNameRef.current.style.display = "block";
    userGoalRef.current.style.display = "none";
    userInputGoalRef.current.style.display = "block";
    userEmailRef.current.style.display = "none";
    userInputEmailRef.current.style.display = "block";
    profileChangeBtn.current.style.display = "none";
    profileSubmitBtn.current.style.display = "block";
  };

  const handleProfielSumit = e => {
    e.preventDefault();
    console.log("dawd");
    const newProfileData = profile.map(item => {
      if (item.iuser === 2) {
        item.name = editName;
        item.objective = editGoal;
        item.email = editEmail;
      }
      return item;
    });
    setProfile(newProfileData);
    putProfile(editName, editGoal, editEmail);
    userNameRef.current.style.display = "block";
    userInputNameRef.current.style.display = "none";
    userGoalRef.current.style.display = "block";
    userInputGoalRef.current.style.display = "none";
    profileChangeBtn.current.style.display = "block";
    profileSubmitBtn.current.style.display = "none";
    userEmailRef.current.style.display = "block";
    userInputEmailRef.current.style.display = "none";

    navigate("/mypages");
  };

  return (
    <div className="user_info">
      <form className="user_profile_form">
        <div className="user_profile_img">
          <img
            src={"http://192.168.0.144:5008/img/" + editImg}
            alt="이미지"
          ></img>
        </div>
        <div className="user_info_right">
          <p className="my_name">사용자 이름</p>
          <div className="user_name_box" ref={userNameRef}>
            <span>{editName}</span>
          </div>
          <div className="input_user_name" ref={userInputNameRef}>
            <input
              id="input_name"
              value={editName}
              className="input_name"
              onChange={e => setEditName(e.target.value)}
            ></input>
          </div>
          <p className="my_goal">나의 포부</p>
          <div className="user_goal_box" ref={userGoalRef}>
            <span>{editGoal}</span>
          </div>
          <div className="input_user_goal" ref={userInputGoalRef}>
            <input
              id="input_goal"
              value={editGoal}
              className="input_goal"
              onChange={e => setEditGoal(e.target.value)}
            ></input>
          </div>
          <p className="my_email">이메일</p>
          <div className="user_email_box" ref={userEmailRef}>
            <span>{editEmail}</span>
          </div>
          <div className="input_user_email" ref={userInputEmailRef}>
            <input
              id="input_email"
              value={editEmail.split("@")[0]}
              className="input_email"
              onChange={e => setEditEmail(e.target.value)}
            ></input>
          </div>
          <button
            className="edit_profile"
            onClick={handleChange}
            ref={profileChangeBtn}
          >
            사용자 정보 수정하기
          </button>
          <button
            className="set_profile"
            onClick={handleProfielSumit}
            ref={profileSubmitBtn}
          >
            사용자 정보 수정 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
