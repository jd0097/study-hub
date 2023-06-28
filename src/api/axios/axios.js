import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "*/*",
  },
});

const getTodo = async (fn1, fn2) => {
  try {
    const res = await axiosInstance.get("/memos");
    const result = res.data;
    // 문제가 무엇인가? true false 가 문자열로 들어옴
    const memosArr = result.map(item => {
      if (item.completed === "true") {
        item.completed = true;
      } else {
        item.completed = false;
      }
      return item;
    });
    fn1(memosArr);
    fn2(false);
    //
    // item.completed = JSON.parse(item.completed);
  } catch (error) {
    console.log(error);
    fn2(false);
  }
};
