import { useState } from "react";
import TypingAnime from "../components/TypingAnime";

function Intro() {
  const [display, setDisplay] = useState("block");

  const handleStyle = () => {
    const newDisplay = display === "block" ? "none" : "block";
    setDisplay(newDisplay);
  };

  return (
    <div className="intro_wrap" style={{ display }}>
      <div className="intro_inner">
        <div className="intro_box">
          <div className="intro_logo"></div>
          <TypingAnime text="STUDY HUB에 오신걸 환영합니다." />
          <button onClick={handleStyle}>시작하기</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
