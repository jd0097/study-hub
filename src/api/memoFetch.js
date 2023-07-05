import axios from "axios";


// const getPlan = async () => {
//   try {
//     const res = await axios.get("/api/todo/allboard");
//     const result = res.data;
//     console.log("getPlan 요청완료");
//     return result;
//   } catch (err) {
//     console.log(err);

//     return [];
//   }
// };

// MEMO 데이터 불러오기 기능
const getProfiles = async () => {
  try {
    const res = await axios.get("/api/user/allList");
    const result = res.data;
    console.log("잘못된요청?");
    return result;
  } catch (err) {
    console.log(err);

    return [];
  }
};

// MEMO 데이터 불러오기 기능
const getMemo = async () => {
  try {
    const res = await axios.get("/api/memo/allMemo");
    const result = res.data;
    console.log("getMemo 요청완료");
    return result;
  } catch (err) {
    console.log(err);

    return [];
  }
};

// MEMO 작성/전송/기능
// ===================================
const postMemo = async newMemo => {
  try {
    const res = await axios.post("/api/memo", newMemo);
    const result = res.data;
    console.log("전송성공?");
  } catch (error) {
    console.log(error);
  }
};

// MEMO 수정 기능
// ===================================
const patchMemo = async (memoLog, editTitle, editctnt, _iuser) => {
  try {
    const res = await axios.patch(`/api/memo/titleCtnt/${_iuser}`, {
      imemo: memoLog,

      title: editTitle,
      ctnt: editctnt,
    });
    const result = res.data;

    console.log("수정완료?");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// MEMO 전체삭제기능;
// ====================================
const deleteAllTodo = async () => {
  try {
    const res = await axios.get("/api/memo");

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

const deleteMemo = async _imemo => {
  try {
    const res = await axios.delete("/api/memo", {
      data: {
        imemo: _imemo,
        delYn: 1,
      },
      headers: { "Content-Type": "application/json" },
    });
    console.log("성공?");
  } catch (error) {
    console.log(error);
  }
};

export {
  axios,
  getProfiles,
  getMemo,
  deleteAllTodo,
  postMemo,
  patchMemo,
  deleteMemo,

};
