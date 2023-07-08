import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMemo } from "./api/memoFetch";
import { getProfiles } from "./api/userFatch";

import { getPlan, getSubjects } from "./api/planFetch";
import {getSticker} from "./api/planFetch";


import "./scss/layout.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CalendarPage from "./pages/CalendarPage";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import Mypages from "./pages/Mypages";
import Note from "./pages/Note";
import NoteWrite from "./pages/NoteWrite";
import StudyWrite from "./pages/StudyWrite";
import NotFound from "./pages/NotFound";
import StudyPlan from "./pages/StudyPlan";
import MemoModal from "./components/MemoModal";
import ImgModal from "./components/ImgModal";

function App() {
  const [memoData, setMemoData] = useState([]);
  const [memoTitle, setMemoTitle] = useState("");
  const [memoText, setMemoText] = useState("");
  const [memoLog, setMemoLog] = useState(null);
  const [memoIndex, setMemoIndex] = useState("");
  const [profile, setProfile] = useState([]);

  // 스터디 플랜
  const [planData, setPlanData] = useState([]);
  const [planTitle, setPlanTitle] = useState("");
  const [planText, setPlanText] = useState("");
  const [planLog, setPlanLog] = useState(null);
  const [planIndex, setPlanIndex] = useState();

  const [category, setCategory] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [savedSubject, setSavedSubject] = useState(null);



  //캘린더 
  const [sticker, setSticker] = useState([]);  


  // 모달창
  const [Modal, isModal] = useState("");
  // const [imgModal, isImgModal] = useState("");

  // 카테고리 데이터 가져오기
  const getCategoryFatch = async () => {
    try {
      const categoryJson = await getSubjects();
      setCategory(categoryJson);
    } catch (error) {
      console.log(error);
    }
  };

  // 프로필 데이터 가져오기
  const getProfilesFatch = async () => {
    try {
      const profileJson = await getProfiles();
      setProfile(profileJson);
    } catch (error) {
      console.log(error);
    }
  };

  // 메모데이터 가져오기
  const getMomoFetch = async () => {
    try {
      const memoJson = await getMemo();
      setMemoData(memoJson);
    } catch (error) {
      console.log(error);
    }
  };

  // 플랜데이터 가져오기
  const getPlanFetch = async () => {
    try {
      const planJson = await getPlan();
      setPlanData(planJson);
    } catch (error) {
      console.log(error);
    }
  };



 const getStickerFetch = async () => {
  try{
 const stickerJson = await getSticker();
 setSticker(stickerJson)
  } catch (err) {
    console.log(err)
  }
 }

  useEffect(() => {
    getMomoFetch();
    getProfilesFatch();
    getPlanFetch();

    getCategoryFatch();

    getStickerFetch();

  }, []);

  return (
    <div className="wrap">
      {/* <ImgModal /> */}
      {Modal ? (
        <MemoModal
          memoData={memoData}
          setMemoData={setMemoData}
          Modal={Modal}
          isModal={isModal}
        />
      ) : (
        ""
      )}

      <Header />
      {/* <Intro /> */}
      <div className="container">
        <Routes>
          <Route path="/main" element={<Main memoData={memoData} />}></Route>
          <Route
            path="/note"
            element={
              <Note
                Modal={Modal}
                isModal={isModal}
                setMemoLog={setMemoLog}
                memoLog={memoLog}
                memoData={memoData}
                setMemoData={setMemoData}
                memoIndex={memoIndex}
                setMemoIndex={setMemoIndex}
                profile={profile}
              />
            }
          ></Route>
          <Route
            path="/notewrite"
            element={
              <NoteWrite
                setMemoLog={setMemoLog}
                memoLog={memoLog}
                memoData={memoData}
                setMemoData={setMemoData}
                memoText={memoText}
                setMemoText={setMemoText}
                memoTitle={memoTitle}
                setMemoTitle={setMemoTitle}
                memoIndex={memoIndex}
                setMemoIndex={setMemoIndex}
                profile={profile}
              />
            }
          ></Route>
          <Route
            path="/mypages"
            element={<Mypages profile={profile} setProfile={setProfile} />}
          ></Route>
          <Route path="/caledar" element={<CalendarPage 
          sticker={sticker} setSticker={setSticker} 
          />}></Route>
          <Route
            path="/studyplan"
            element={
              <StudyPlan
                planData={planData}
                setPlanData={setPlanData}
                planTitle={planTitle}
                setPlanTitle={setPlanTitle}
                planLog={planLog}
                setPlanLog={setPlanLog}
                planIndex={planIndex}
                setPlanIndex={setPlanIndex}
                profile={profile}

                category={category}
                setCategory={setCategory}
                selectedSubject={selectedSubject}
                setSelectedSubject={setSelectedSubject}

                sticker={sticker}
                setSticker={setSticker}

              />
            }
          ></Route>
          <Route
            path="/studyWrite"
            element={
              <StudyWrite
                planData={planData}
                setPlanData={setPlanData}
                planTitle={planTitle}
                setPlanTitle={setPlanTitle}
                planText={planText}
                setPlanText={setPlanText}
                planLog={planLog}
                setPlanLog={setPlanLog}
                planIndex={planIndex}
                setPlanIndex={setPlanIndex}
                profile={profile}

                category={category}
                setCategory={setCategory}
                selectedSubject={selectedSubject}
                setSelectedSubject={setSelectedSubject}
                savedSubject={savedSubject}
                setSavedSubject={setSavedSubject}

                sticker={sticker}
                setSticker={setSticker}

              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
