import axios from "axios";
import { axiosInstance } from "./memoFetch";

// 유저 데이터 받아오기 기능

// 프로필 데이터 불러오기 기능
const getProfiles = async () => {
  try {
    const res = await axiosInstance.get("/api/user/alllist");
    const result = res.data;
    console.log("getProfile 요청완료");
    return result;
  } catch (err) {
    console.log(err);

    return [];
  }
};

const putProfile = async (editName, editGoal, editEmail) => {
  try {
    const res = await axiosInstance.put("/api/user/profile/2", {
      name: editName,
      objective: editGoal,
      email: editEmail,
    });
    const result = res.data;
    console.log("put완료?");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { axios, getProfiles, putProfile };
