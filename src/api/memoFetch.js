import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//PLAN 데이터 불러오기 기능
// // USER 데이터 불러오기 기능
// const getProfiles = async () => {
//   try {
//     const res = await axios.get("/api/user/allList");
//     const result = res.data;
//     console.log("getProfile 요청완료");
//     return result;
//   } catch (err) {
//     console.log(err);

//     return [];
//   }
// };

// MEMO 데이터 불러오기 기능
const getMemo = async () => {
  try {
    const res = await axiosInstance.get("/api/memo/allmemo");
    const result = res.data;
    console.log("getMemo 요청완료");
    console.log(result);
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
    const res = await axiosInstance.post("/api/memo/post", newMemo);
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
    const res = await axiosInstance.patch(`/api/memo/titlectnt/${_iuser}`, {
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
const deleteAllMemo = async _imemo => {
  try {
    const res = await axiosInstance.delete("/api/memo/allmemo", {
      data: {
        imemo: _imemo,
      },
    });
    const result = res.data;
    console.log(result);
    console.log("전체삭제요청 성공?");
  } catch (error) {
    console.log(error);
  }
};

// MEMO 삭제기능;
// ===================================

const deleteMemo = async _imemo => {
  try {
    const res = await axiosInstance.delete("/api/memo", {
      data: {
        imemo: _imemo,
      },
    });
    const result = res.data;
    console.log(result);
    console.log("삭제요청 성공?");
  } catch (error) {
    console.log(error);
  }
};

export {
  axios,
  axiosInstance,
  getMemo,
  deleteAllMemo,
  postMemo,
  patchMemo,
  deleteMemo,
};
