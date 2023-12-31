import axios from "axios";
import { axiosInstance } from "./memoFetch";

// 타이머 기능
// 분 추가 기능 ===================================

export const postSeconds = async _data => {
  console.log("초 단위 시간을 보내줍니다. ========");
  console.log(_data);
  try {
    const res = await axiosInstance.post("/api/timer", _data);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//플랜 가져오기
export const getPlan = async () => {
  try {
    const res = await axiosInstance.get("/api/todo/allboard");
    const result = res.data;
    console.log("getPlan 요청완료");
    return result;
  } catch (err) {
    console.log(err);

    return [];
  }
};

//년, 월, 일 스터디 플랜 가져오기
export const getPlanData = async (_month, _year, _day) => {
  try {
    const res = await axiosInstance.get(
      `/api/todo/bymonth?iuser=2&month=${_month}&year=${_year}&day=${_day}`,
    );
    const result = res.data;
    // console.log("getPlan 요청완료");
    return result;
  } catch (err) {
    console.log(err);

    return [];
  }
};

//
// 카테고리 가져오기
export const getSubjects = async () => {
  try {
    const res = await axiosInstance.get("/api/category/allcategory");
    const result = res.data;

    // console.log("getCategory 요청완료");

    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 플랜 작성기능
export const postWrite = async newPlan => {
  console.log("플랜작성 보내줍니다. ======== ", newPlan);
  try {
    const res = await axiosInstance.post("/api/todo", newPlan);
    const result = await res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

// // 플랜 수정기능
export const putPlan = async (
  planLog,
  editTitle,
  editctnt,
  selectedSubject,
) => {
  try {
    const res = await axiosInstance.put("/api/todo", {
      itodo: planLog,
      title: editTitle,
      ctnt: editctnt,
      icategory: selectedSubject,
    });
    console.log("수정 성공!!!!!!");
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// 플랜 삭제기능
export const deletePlan = async itodo => {
  try {
    const res = await axiosInstance.delete(`/api/todo?itodo=${itodo}`);
    const result = res.data;

    console.log(result);
    console.log("삭제했다!!!!");
    return result;
  } catch (error) {
    console.log(error);
  }
};

//스티커 모두 가져오기
export const getAllSticker = async () => {
  try {
    const res = await axiosInstance.get("/api/sticker");
    const result = res.data;
    console.log("getAllSticker 요청완료 : ", result);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// 캘린더에 스티커 가져오기
export const getSticker = async _month => {
  try {
    const res = await axiosInstance.get(`/api/timer?iuser=2&month=${_month}`);
    const result = res.data;
    console.log("getSticker 요청완료 : ", result);
    return result;
  } catch (err) {
    console.log(err);

    return [];
  }
};
