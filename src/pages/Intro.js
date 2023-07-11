import { useState } from "react";
import TypingAnime from "../components/TypingAnime";
import { useNavigate } from "react-router";

function Intro() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("block");

  const handleStyle = () => {
    const newDisplay = display === "block" ? "none" : "block";
    setDisplay(newDisplay);
    navigate("/main");
  };

  return (
    <div className="intro_wrap" style={{ display }}>
      <div className="intro_inner">
        <div className="intro_box">
          <div className="intro_logo"></div>
          <div className="intro_text">STUDY-HUB 에 오신걸 환영합니다.</div>
          {/* <TypingAnime text="STUDY HUB에 오신걸 환영합니다." /> */}
          <button onClick={handleStyle}>시작하기</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
