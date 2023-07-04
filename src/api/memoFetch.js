import axios from "axios";


// 데이터 불러오기 기능
const getMemo = async () => {
  try {
    const res = await axios.get("/memo");
    // axiosInstance;
    const result = res.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// 작성/전송/기능
// ===================================
const postMemo = async newTodo => {
  try {
    const res = await axios.post("/api/memo", newTodo);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// ===================================

// 수정 기능
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

// 전체삭제기능;
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

// 삭제기능;
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




export {

  axios,
  getMemo,
  deleteAllTodo,
  postMemo,
  patchMemo,
  deleteMemo
};
