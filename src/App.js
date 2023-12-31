import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMemo } from "./api/memoFetch";
import { getProfiles } from "./api/userFatch";

import { getPlan, getPlanData, getSubjects } from "./api/planFetch";
import { getSticker, getAllSticker, getMonth } from "./api/planFetch";

import "./scss/layout.scss";
import Intro from "./pages/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CalendarPage from "./pages/CalendarPage";
import Main from "./pages/Main";
import Mypages from "./pages/Mypages";
import Note from "./pages/Note";
import NoteWrite from "./pages/NoteWrite";
import StudyWrite from "./pages/StudyWrite";
import NotFound from "./pages/NotFound";
import StudyPlan from "./pages/StudyPlan";
import MemoModal from "./components/MemoModal";
import About from "./pages/About";
import ImgModal from "./components/ImgModal";

function App() {
  // 유저프로필 쪽
  const [profile, setProfile] = useState([]);
  const [editImg, setEditImg] = useState("");
  const [editGoal, setEditGoal] = useState("");
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  // 메모쪽
  const [memoData, setMemoData] = useState([]);
  const [memoTitle, setMemoTitle] = useState("");
  const [memoText, setMemoText] = useState("");
  const [memoLog, setMemoLog] = useState(null);
  const [memoIndex, setMemoIndex] = useState("");

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
  const [month, setMonth] = useState(null);

  // 모달창
  const [Modal, isModal] = useState("");
  // const [imgModal, isImgModal] = useState("");

  const profileName = profile[1]?.name || "";
  const porifleGoal = profile[1]?.objective || "";
  const profileImg = profile[1]?.mainPic || "";
  const profielEmail = profile[1]?.email || "";

  const location = useLocation();

  useEffect(() => {
    setEditName(profileName);
    setEditGoal(porifleGoal);
    setEditImg(profileImg);
    setEditEmail(profielEmail);
  }, [profileName, porifleGoal, profileImg, profielEmail]);

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

  useEffect(() => {
    setEditName(profileName);
    setEditGoal(porifleGoal);
    setEditImg(profileImg);
  }, [profileName, porifleGoal, profileImg]);

  useEffect(() => {
    getMomoFetch();
    getProfilesFatch();

    getCategoryFatch();
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

      <Header
        profile={profile}
        editImg={editImg}
        editName={editName}
        editGoal={editGoal}
      />

      {/* <Intro /> */}
      <div className="container fade-in">
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route
            path="/main"
            element={
              <Main
                memoData={memoData}
                editImg={editImg}
                editName={editName}
                editGoal={editGoal}
              />
            }
          ></Route>
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
              />
            }
          ></Route>
          <Route
            path="/mypages"
            element={
              <Mypages
                profile={profile}
                setProfile={setProfile}
                editImg={editImg}
                setEditImg={setEditImg}
                editGoal={editGoal}
                setEditGoal={setEditGoal}
                editName={editName}
                setEditName={setEditName}
                editEmail={editEmail}
                setEditEmail={setEditEmail}
              />
            }
          ></Route>
          <Route
            path="/caledar"
            element={<CalendarPage setPlanData={setPlanData} />}
          ></Route>
          <Route
            path="/studyplan/:selectday"
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
              />
            }
          ></Route>
          <Route
            path="/studyWrite/:selectday"
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
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
