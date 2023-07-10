import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "../style/calendarpage.css";
import { Modal, Button } from "antd";
import { useNavigate } from "react-router";


const CalendarPage = ({ sticker, setSticker, setPlanData, allSticker }) => {
  const navigator = useNavigate();
  console.log("카렌더의 전체 스티커 이미지 정보 : ", allSticker);
  console.log("카렌더의 스티커 정보 : ", sticker);

  // 달력 초기 포커스 값
  const [day, setDay] = useState(new Date());

  // 사용자가 선택한 날짜를 저장하는 용도
  const [userSelectDay, setUserSelectDay] = useState("");


  // public 폴더를 가르킴(카페참조)
  const path = process.env.PUBLIC_URL;
  // 화면에 출력될 서버 정보
  const 서버정보 = [
    { day: "2023-06-28", level: 0 },
    { day: "2023-06-05", level: 1 },
    { day: "2023-06-25", level: 2 },
    { day: "2023-06-11", level: 3 },
    { day: "2023-06-21", level: 4 },
    { day: "2023-06-15", level: 5 },
  ];



  // 데이터 화면 갱신 용도
  const [serverData, setServerData] = useState([]);


  useEffect(() => {
    // 데이터베이스에서 스티커 정보를 가져와서 서버 데이터 설정
    // 예시: fetchStickers 함수로 스티커 정보를 가져와서 설정하는 로직
    const fetchStickers = async () => {
      try {
        const response = await fetch("your-api-endpoint");
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Error fetching stickers:", error);
      }
    };
    fetchStickers();
  }, []);


  // 조건 즉, 서버의 데이터를 읽어와서 날짜{day}를 비교해서
  // 같으면 html 을 만들어서 집어넣는다.
  const showScheduleJSX = ({ date, view }) => {
    // moment 라이브러리는 날짜를 우리가 원하는 형태로 변경한다.
    let tempDay = moment(date).format("YYYY-MM-DD");
    let obj = sticker.find(item => {
      if (moment(item.deadLine).format("YYYY-MM-DD") === tempDay) {
        return item;
      }
    });
    if (obj) {
      // 아이템을 찾은 경우 jsx 생성하여 Return 출력  
      return (
        <div className="user-level">
          <img
            src={`${path}/images/calendar-icon-${obj.isticker}.png`}
            style={{ width: 50 }}
          />
           {obj.isticker}
        </div>
      );
    } else {
      // 아이템 없는 경우 jsx 생성하여 Return 출력
      return (
        <div className="user-level-default">
          <img
             src={`${path}/images/calendar-icon-0.png`}
            style={{ width: 50 }}
          />
        </div>
      );
    }
  };


  // 신규인지 아닌지 구분
  const [editData, setEditData] = useState(false);
  const handleClickDay = (value, event) => {
    const selectDay = moment(value).format("YYYY-MM-DD");

    let now = new Date();
    let nextNow = new Date(selectDay);
    if (nextNow.getTime() > now.getTime()) {
      console.log("날짜를 선택해 주세요~.");
    } else {
      console.log("오늘 날자에요.");



    // 사용자가 날짜를 클릭하면 보관해 둔다.
    setUserSelectDay(selectDay);
    // 현재 사용자 정보가 있는 경우인지 아닌지 구분
    const userData = event.currentTarget.querySelector(".user-level");
    console.log(userData);
    if (userData) {
      // 수정을 하는 경우
      // setEditData(true);
    } else {
      // 신규로 등록을 하는 경우
      setEditData(false);
    }
    showModal();
    navigator(`/studyplan/${selectDay}`);
  }
};






  // 모달창의 아이콘을 클릭했을 때
  const handleClickIcon = _id => {
    console.log("서버에 저장할 데이터 날짜 : ", userSelectDay, " 레벨 : ", _id);
    if (editData) {
      // 수정할거에요.
      console.log("수정");
      const newArr = serverData.map(item => {
        if (item.day === userSelectDay) {
          item.level = _id;
        }
        return item;
      });
      // 업데이트
      setServerData(newArr);
    } else {
      console.log("추가");
      // 데이터를 추가한다. 서버에서 받아온 데이터 내용 갱신
      setServerData([...serverData, { day: userSelectDay, level: _id }]);
    }
    // 모달 숨기기
    setIsModalOpen(false);
  };







  // 사용자 정보 초기화
  const handleDelete = () => {
    console.log("삭제");
    const newArr = serverData.map(item => {
      if (item.day === userSelectDay) {
        item.level = 0;
      }
      return item;
    });
    // 업데이트
    setServerData(newArr);

    // 모달 숨기기
    setIsModalOpen(false);
  };

  // 모달창 관련 기능
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };








  return (
    <div className="p-6 mt-5 shadow rounded bg-white">
      <div>
        <Calendar
          onClickDay={(value, event) => handleClickDay(value, event)}
          onChange={setDay}
          value={day}
          calendarType="US"
          formatDay={(locale, date) => moment(date).format("D")}
          tileContent={showScheduleJSX}
        />
      </div>
      <Modal
        title="Select Your Level"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={[
          <Button key="back" onClick={handleDelete}>
            Delete
          </Button>,
          <Button key="close" type="primary" onClick={handleOk}>
            Close
          </Button>,
        ]}
      >
        {/* 스티커 넣기 */}


        {/* <ul className="calendar-modal-level-list">
          <li>
            <img
              src={`${path}/images/calendar-icon-1.png`}
              alt="levle1"
              onClick={() => handleClickIcon(1)}
            />
          </li>
          <li>
            <img
              src={`${path}/images/calendar-icon-2.png`}
              alt="levle2"
              onClick={() => handleClickIcon(2)}
            />
          </li>
          <li>
            <img
              src={`${path}/images/calendar-icon-3.png`}
              alt="levle3"
              onClick={() => handleClickIcon(3)}
            />
          </li>
          <li>
            <img
              src={`${path}/images/calendar-icon-4.png`}
              alt="levle4"
              onClick={() => handleClickIcon(4)}
            />
          </li>
          <li>
            <img
              src={`${path}/images/calendar-icon-5.png`}
              alt="levle5"
              onClick={() => handleClickIcon(5)}
            />
          </li>
        </ul> */}
      </Modal>
    </div>
  );
};





export default CalendarPage;