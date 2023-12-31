import React, { useEffect, useState } from "react";
import UserName from "../components/UserName";
import UserObj from "../components/UserObj";
import UserInfo from "../components/UserInfo";

const Mypages = ({
  profile,
  setProfile,
  editName,
  setEditName,
  editImg,
  setEditImg,
  editGoal,
  setEditGoal,
  editEmail,
  setEditEmail,
}) => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="mypage_wrap">
      <div className="title">
        <span>사용자 계정</span>
      </div>
      <div className="mypage_inner">
        {profile ? (
          <UserInfo
            profile={profile}
            setProfile={setProfile}
            editName={editName}
            setEditName={setEditName}
            editGoal={editGoal}
            setEditGoal={setEditGoal}
            editImg={editImg}
            setEditImg={setEditImg}
            editEmail={editEmail}
            setEditEmail={setEditEmail}
          />
        ) : (
          "프로필데이터가 없습니다. 근데 없을리가 없을것."
        )}
      </div>
    </div>
  );
};

export default Mypages;
