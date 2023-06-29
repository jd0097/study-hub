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
import StudyList from "./pages/StudyList";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMemo } from "./api/axios/axios";

function App() {
  const [memoData, setMemoData] = useState("");
  const [memoTitle, setMemoTitle] = useState("");
  const [memoText, setMemoText] = useState("");

  useEffect(() => {
    getMemo(setMemoData);
  }, []);

  return (
    <div className="wrap">
      <Header />
      {/* <Intro /> */}
      <div className="container">
        <Routes>
          <Route path="/main" element={<Main />}></Route>
          <Route
            path="/note"
            element={<Note memoData={memoData} setMemoData={setMemoData} />}
          ></Route>
          <Route
            path="/notewrite"
            element={
              <NoteWrite
                memoData={memoData}
                setMemoData={setMemoData}
                memoText={memoText}
                setMemoText={setMemoText}
                memoTitle={memoTitle}
                setMemoTitle={setMemoTitle}
              />
            }
          ></Route>
          <Route path="/mypages" element={<Mypages />}></Route>
          <Route path="/caledar" element={<CalendarPage />}></Route>
          <Route path="/studylist" element={<StudyList />}></Route>
          <Route path="/studyWrite" element={<StudyWrite />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
