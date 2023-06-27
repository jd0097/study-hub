import "./scss/layout.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Diary from "./pages/Diary";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import Mypages from "./pages/Mypages";
import Note from "./pages/Note";
import NoteWrite from "./pages/NoteWrite";
import NotFound from "./pages/NotFound";
import Write from "./pages/write";
import DayList from "./pages/DayList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/note" element={<Note />}></Route>
          <Route path="/noteWrite" element={<NoteWrite />}></Route>
          <Route path="/mypages" element={<Mypages />}></Route>
          <Route path="/diary" element={<Diary />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/dayList" element={<DayList />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
