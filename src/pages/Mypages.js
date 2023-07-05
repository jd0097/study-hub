import React from "react";
import UserName from "../components/UserName";
import UserObj from "../components/UserObj";

const Mypages = ({ profile, setProfile }) => {
  const path = process.env.PUBLIC_URL;

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
      {profile ? (
        <div className="mypage_inner">
          {profile
            .filter(item => item.iuser === 2)
            .map((item, index) => (
              <>
                <div className="account_img">
                  <img src={`${path}/source/default.png`}></img>
                  <button className="img_change">수정</button>
                </div>
                <form className="user_profile_form">
                  <p>{item.name}</p>
                  {/* {profile.map(item => (
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
          ))} */}
                </form>
              </>
            ))}
        </div>
      ) : (
        <div className="mypage_inner">데이터가 없다</div>
      )}
    </div>
  );
};

export default Mypages;
