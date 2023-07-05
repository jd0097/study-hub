import axios from "axios";

// 유저 데이터 받아오기 기능

// 프로필 데이터 불러오기 기능
const getProfile = async () => {
  try {
    const res = await axios.get("/api/user/allList");
    const result = res.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);

    return [];
  }
};

export { axios, getProfile };
