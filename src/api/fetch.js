import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "/api",
  timeout: 1000,
  // headers: {
  //   "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  //   Accept: "*/*",
  // },
});



// 데이터 불러오기 기능
const getMemo = async () => {
  try {
    const res = await axiosInstance.get("/memo");
    axiosInstance;
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
    const res = await axiosInstance.post("/memo", newTodo);
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
    const res = await axiosInstance.patch(`/memo/${_iuser}`, {
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
    const res = await axiosInstance.get("/memo");
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
    const res = await axiosInstance.delete(`/memo/${_iuser}`);
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
    const res = await axiosInstance.post("/timer", timeMin);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export {
  axiosInstance,
  getMemo,
  deleteAllTodo,
  postMemo,
  patchMemo,
  deleteMemo,
  postMinute,
};
