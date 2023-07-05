import React, { useEffect, useRef, useState } from "react";
import { putProfile } from "../api/userFatch";
const UserInfo = ({ profile, setProfile }) => {
  const [editName, setEditName] = useState("");
  const [editGoal, setEditGoal] = useState("");
  console.log(profile);
  const userNameRef = useRef(null);
  const userGoalRef = useRef(null);
  const userInputNameRef = useRef(null);
  const userInputGoalRef = useRef(null);
  const profileChangeBtn = useRef(null);
  const profileSubmitBtn = useRef(null);

  const handleChange = () => {
    userNameRef.current.style.display = "none";
    userInputNameRef.current.style.display = "block";
    userGoalRef.current.style.display = "none";
    userInputGoalRef.current.style.display = "block";
    profileChangeBtn.current.style.display = "none";
    profileSubmitBtn.current.style.display = "block";
  };

  const handleProfielSumit = () => {
    console.log("dawd");
    const newProfileData = profile.map(item => {
      if (item.iuser === 2) {
        item.name = editName;
        item.objective = editGoal;
      }
      return item;
    });
    setProfile(newProfileData);
    putProfile(editName, editGoal);
    userNameRef.current.style.display = "block";
    userInputNameRef.current.style.display = "none";
    userGoalRef.current.style.display = "block";
    userInputGoalRef.current.style.display = "none";
    profileChangeBtn.current.style.display = "block";
    profileSubmitBtn.current.style.display = "none";
  };

  return (
    <div className="user_info">
      <form className="user_profile_form">
        <div className="user_profile_img">
          <img></img>
          <button className="profile_img_change">
            이건 안됩니다 디폴트사진 때려박습니다.
          </button>
        </div>
        <p>사용자 이름</p>
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
        <p>나의 포부</p>
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
        <div
          className="edit_profile"
          onClick={handleChange}
          ref={profileChangeBtn}
        >
          사용자 정보 수정하기
        </div>
        <button
          className="set_profile"
          onClick={handleProfielSumit}
          ref={profileSubmitBtn}
        >
          사용자 정보 수정 완료
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
