import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:400",
  timeout: 1000,
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "*/*",
  },
});

// 데이터 불러오기 기능
const getMemo = async setMemoData => {
  try {
    const res = await axiosInstance.get("/test");
    const result = res.data;
    setMemoData(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 수정기능
// ===================================
const postMemo = async newTodo => {
  try {
    const res = await axiosInstance.post("/test", newTodo);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// ===================================

// 전체삭제기능;
// ====================================
const deleteAllTodo = async () => {
  try {
    const res = await axiosInstance.get("/test");
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

const deleteMemo = async _id => {
  try {
    const res = await axiosInstance.delete(`/test/${_id}`);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { axiosInstance, getMemo, deleteAllTodo, postMemo , deleteMemo };
