import moment from "moment/moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import"../style/Diary.css"


const Schedule = () => {
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

  const [day, setDay] = useState(new Date());
  const 서버정보 = [

  ];

  const handleClickDay = (value, event) => {

    const div =event.currentTarget.querySelector("div");
    if(div !== null) {
      console.log(div.dataset.gogo)
      const 제목  = div.dataset.gogoTitle
      const 날짜  = div.dataset.gogoDay
      const 이미지  = div.dataset.gogoImgpath
      console.log(`${제목} ${날짜} ${이미지} 있구나`)
    }
    showModal();
  }



const showScheduleJSX=({ date, view }) => {



  let 날짜 = moment(date).format("YYYY-MM-DD")
 
  let result = 서버정보.find((item) => {
    if(item.day === 날짜) {
     
       return item
    }
  })

  if(result){
    return(

      <div data-gogo-title={result.title} data-gogo-day={result.day} data-gogo-imgpath={result.imgPath} >
        <div>{result.title}</div>
        <div>{result.price}</div>
        <div>
          <img src={result.imgPath}/>
        </div>
      </div>
    )
  }
}


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
    </div>
  );
};

export default Schedule;