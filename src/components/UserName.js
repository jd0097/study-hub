import React, { useRef, useState } from "react";

const UserName = ({ profile, setProfile, item }) => {
  const [editName, setEditName] = useState("");
  const userNameBoxref = useRef(null);
  const setUserNameBoxRef = useRef(null);

  const handleNameChange = e => {
    userNameBoxref.current.style.display = "none";
    setUserNameBoxRef.current.style.display = "block";
    e.preventDefault();
  };

  const handleNameSubmit = _iuser => {
    const newNameData = profile.map(item => {
      if (item.iuser === _iuser) {
        item.name = editName;
      }
      return item;
    });
    setProfile(newNameData);
  };
  return (
    <div className="user_name_area">
      <div className="user_name" ref={userNameBoxref}>
        <p>마우스</p>
        <button
          className="user_name_change"
          onClick={handleNameChange}
        ></button>
      </div>
      <div className="set_user_name_box" ref={setUserNameBoxRef}>
        <input
          id="set_user_name"
          className="set_user_name"
          placeholder="이름을 재설정 해주세요"
          name="value"
          value={editName}
          onChange={e => setEditName(e.target.value)}
        ></input>
        <button
          className="name_change_summit"
          onClick={() => handleNameSubmit(item.iuser)}
        >
          수정완료
        </button>
      </div>
    </div>
  );
};

export default UserName;
