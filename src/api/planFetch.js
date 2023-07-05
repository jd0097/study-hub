import axios from "axios";

// 타이머 기능 (정다혜)
// 분 추가 기능 ===================================

export const postSeconds = async _data => {
  console.log("초 단위 시간을 보내줍니다. ========");
  console.log(_data);
  try {
    const res = await axios.post("/api/timer", _data);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const getPlan = async () => {
  try {
    const res = await axios.get("/api/todo/allboard");
    const result = res.data;
    console.log("getPlan 요청완료");
    return result;
  } catch (err) {
    console.log(err);

    return [];
  }
};

//플랜 가져오기
// export const getPlan = async () => {
//   try{
//     const res = await axios.get("/api/todo/allboard")
//     const result = res.data;
//     console.log(result);
//   }catch(err){
//     console.log(err)
//   }
// }

// 플랜 작성기능
export const postWrite = async () => {
  try {
    const res = await axios.post("/api/todo");
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// 플랜 수정기능
// export const

//플랜 전체삭제기능

// 플랜 삭제기능

// 카테고리 가져오기
export const getSubjects = async () => {
  try {
    const res = await axios.get("/api/category/allcategory");
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
