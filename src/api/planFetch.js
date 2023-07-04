import axios from "axios";

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

export { axios, postMinute };
