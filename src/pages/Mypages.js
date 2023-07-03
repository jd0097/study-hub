import React from "react";
import UserName from "../components/UserName";
import UserObj from "../components/UserObj";

const Mypages = ({ profile, setProfile }) => {
  const path = process.env.PUBLIC_URL;
  console.log(profile);

  // const handleNameChange = e => {
  //   userNameBoxref.current.style.display = "none";
  //   setUserNameBoxRef.current.style.display = "block";
  //   e.preventDefault();
  // };
  // const handleObjChange = e => {
  //   userObjecttiveBoxRef.current.style.display = "none";
  //   setUserObjecttiveBoxRef.current.style.display = "block";
  //   e.preventDefault();
  // };

  return (
    <div className="mypage_wrap">
      <h1 className="title">사용자 계정</h1>
      <div className="mypage_inner">
        <div className="account_img">
          <img src={`${path}/source/default.png`}></img>
          <button className="img_change">수정</button>
        </div>
        {profile.length ? "프로필데이터가 존재한다" : "프로필데이터가 읎으요"}
        <form className="user_profile_form">
          <p>사용자 이름</p>
          {profile.map(item => (
            <UserName
              key={item.iuser}
              profile={profile}
              setProfile={setProfile}
              item={item}
            />
          ))}
          <p>나의 포부</p>
          {profile.map(item => (
            <UserObj
              key={item.iuser}
              profile={profile}
              setProfile={setProfile}
              item={item}
            />
          ))}
        </form>
      </div>
    </div>
  );
};

export default Mypages;
