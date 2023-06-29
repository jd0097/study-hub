import "./scss/layout.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CalendarPage from "./pages/CalendarPage";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import Mypages from "./pages/Mypages";
import Note from "./pages/Note";
import NoteWrite from "./pages/NoteWrite";
import NotFound from "./pages/NotFound";
import StudyWrite from "./pages/StudyWrite";
import DayList from "./pages/DayList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrap">
      <Header />
      {/* <Intro /> */}
      <div className="container">
        <Routes>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/note" element={<Note />}></Route>
          <Route path="/notewrite" element={<NoteWrite />}></Route>
          <Route path="/mypages" element={<Mypages />}></Route>
          <Route path="/caledar" element={<CalendarPage />}></Route>
          <Route path="/studyWrite" element={<StudyWrite />}></Route>
          <Route path="/daylist" element={<DayList />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
