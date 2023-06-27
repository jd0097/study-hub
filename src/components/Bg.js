import React from "react";
import { Link } from "react-router-dom";

const Bg = () => {
  return (
    <div className="bg_wrap">
      <div className="logo">
        <Link to="/main">로고공간</Link>
      </div>
    </div>
  );
};

export default Bg;
