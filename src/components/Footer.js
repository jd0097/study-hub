import React from "react";
import { FooterStyle } from "../style/footerSt";

const Footer = () => {
  return (
    <FooterStyle className="footer">
      <div className="footer_inner">
        <div className="footer_left">
          <ul className="page_info">
            <li>
              <span>상호:(주)스터디허브</span>
            </li>
            <li>
              <span>사업자등록번호: 000-000-00000</span>
              <span>통신판매업신고: 제0000-대구중구-000호</span>
            </li>
            <li>
              <span>연락처:12-3456-789</span>
              <span>팩스:000-0000-0000</span>
              <span>go@go.net</span>
            </li>
            <li>
              <span>주소:대구중구어쩌고쩌저고 그린컴퓨터아카데미 5F</span>
            </li>
          </ul>
          <div className="copyright">Copyright ⓒ 스터디 허브</div>
        </div>
        <div className="footer_right">
          <ul className="privacy">
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
