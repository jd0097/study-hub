import "./scss/layout.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bg from "./components/Bg";
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
    <div>
      <Bg />
      <Header />
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/note" element={<Note />}></Route>
        <Route path="/noteWrite" element={<NoteWrite />}></Route>
        <Route path="/mypages" element={<Mypages />}></Route>
        <Route path="/Diary" element={<Diary />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/dayList" element={<DayList />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
