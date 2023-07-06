import React, { useEffect, useRef, useState } from "react";
import { putProfile } from "../api/userFatch";
import { useNavigate } from "react-router";
const UserInfo = ({ profile, setProfile }) => {
  const [editName, setEditName] = useState("");
  const [editGoal, setEditGoal] = useState("");
  const [editImg, setEditImg] = useState("");
  console.log(profile);
  const navigate = useNavigate();

  const profileName = profile[1].name;
  const porifleGoal = profile[1].objective;
  const profileImg = profile[1].mainPic;

  useEffect(() => {
    setEditName(profileName);
    setEditGoal(porifleGoal);
    setEditImg(profileImg);
  }, [profileName, porifleGoal, profileImg]);

  console.log(editName);
  console.log(editGoal);

  const userNameRef = useRef(null);
  const userGoalRef = useRef(null);
  const userInputNameRef = useRef(null);
  const userInputGoalRef = useRef(null);
  const profileChangeBtn = useRef(null);
  const profileSubmitBtn = useRef(null);

  const handleChange = e => {
    e.preventDefault();
    userNameRef.current.style.display = "none";
    userInputNameRef.current.style.display = "block";
    userGoalRef.current.style.display = "none";
    userInputGoalRef.current.style.display = "block";
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
    navigate("/mypages");
  };

  return (
    <div className="user_info">
      <form className="user_profile_form">
        <div className="user_profile_img">
          <img src={editImg} alt="이미지"></img>
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