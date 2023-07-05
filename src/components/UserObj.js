import React, { useRef, useState } from "react";

const UserObj = ({ profile, setProfile, item }) => {
  const [editObj, setEditObj] = useState("");

  const userObjecttiveBoxRef = useRef(null);
  const setUserObjecttiveBoxRef = useRef(null);

  const handleObjChange = e => {
    userObjecttiveBoxRef.current.style.display = "none";
    setUserObjecttiveBoxRef.current.style.display = "block";
    e.preventDefault();
  };
  return (
    <div className="user_obj_area">
      <div className="user_objective" ref={userObjecttiveBoxRef}>
        <p>어쩌고</p>
        <button
          className="user_objective_change"
          onClick={handleObjChange}
        ></button>
      </div>
      <div className="set_user_objective_box" ref={setUserObjecttiveBoxRef}>
        <input
          id="set_objective"
          className="set_objective"
          placeholder="포부를 입력해주세요"
          name="value"
          value={editObj}
          onChange={e => setEditObj(e.target.value)}
        ></input>
        <button className="objective_change_summit">수정완료</button>
      </div>
    </div>
  );
};

export default UserObj;
