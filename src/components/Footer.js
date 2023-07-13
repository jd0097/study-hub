import React from "react";
import { FooterStyle } from "../style/footerSt";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle className="footer">
      <div className="footer_inner">
        <div className="footer_left">
          <ul className="page_info">
            <li>
              <span>상호:(주)CODEING CASTLE</span>
            </li>
            <li>
              <span>연락처:12-3456-789</span>
              <span>팩스:012-3456-789</span>
              <span>https://github.com/jd0097/study-hub/pull/39</span>
            </li>
            <li>
              <span>주소:대구중구어쩌고쩌저고 그린컴퓨터아카데미 5F</span>
            </li>
          </ul>
          <div className="copyright">Copyright ⓒ CODEING CASTLE</div>
        </div>
        <div className="footer_right">
          <ul className="privacy">
            <li>
              <Link to="/about">프로젝트 참여자</Link>
            </li>
            <li>개인정보처리방침</li>
          </ul>
          <div className="footer_logo"></div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
