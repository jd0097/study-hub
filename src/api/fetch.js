import axios from "axios";

// 프로필 데이터 불러오기 기능
const getProfile = async () => {
  try {
    const res = await axios.get("/api/user");
    const result = res.data;
    console.log("프로필" + result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// MEMO 데이터 불러오기 기능
const getMemo = async () => {
  try {
    const res = await axios.get("/api/memo/allMemo");
    const result = res.data;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// MEMO 작성/전송/기능
// ===================================
const postMemo = async newTodo => {
  try {
    const res = await axios.post("/memo", newTodo);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// ===================================

// MEMO 수정 기능
// ===================================
const patchMemo = async (_iuser, editTitle, editctnt) => {
  try {
    const res = await axios.patch(`/memo/${_iuser}`, {
      title: editTitle,
      ctnt: editctnt,
    });
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// MEMO 전체삭제기능;
// ====================================
const deleteAllTodo = async () => {
  try {
    const res = await axios.get("/memo");
    const result = res.data;
    // 문제가 무엇인가? true false 가 문자열로 들어옴
    result.forEach(item => {
      deleteMemo(item.id);
    });
  } catch (error) {
    console.log(error);
  }
};
// MEMO 삭제기능;
// ===================================

const deleteMemo = async _iuser => {
  try {
    const res = await axios.delete(`/memo/${_iuser}`);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// 타이머 기능 (정다혜)
// 분 추가 기능 ===================================
const postMinute = async timeMin => {
  try {
    const res = await axios.post("/timer", timeMin);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export {
  axios,
  getMemo,
  deleteAllTodo,
  postMemo,
  patchMemo,
  deleteMemo,
  postMinute,
  getProfile,
};
