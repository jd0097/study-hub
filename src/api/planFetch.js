import axios from "axios";

// 타이머 기능 (정다혜)
// 분 추가 기능 ===================================
export const postSeconds = async () => {
  console.log("초 단위 시간을 보내줍니다. ========");
  try {
    const res = await axios.post("/api/timer");
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};


// 플랜 작성하기 
export const postWrite = async () => {
  try {
      const res =  await axios.post("/api/todo");
      const result = res.data;
      console.log(result);
  } catch(err) {
      console.log(err);
  }
};

// 카테고리 가져오기 
export const getSubjects = async () => {
  try {
    const res = await axios.get("/api/category/allcategory");
    const result = res.data;
    console.log(result);
  } catch(err) {
    console.log(err);
  }
};