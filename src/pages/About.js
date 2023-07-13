import React from "react";

const About = () => {
  return (
    <div className="about_wrap">
      <div className="about_inner">
        <div className="about_title">프로젝트 참여자</div>
        <div className="for_team">
          <div className="backend">
            <h2>백앤드 팀</h2>
            <ul className="backend_team">
              <li>
                <span>배성현</span>
                <span>프로필 생성 ,프로필 수정, 메모장 ,메일전송, Docker</span>
              </li>
              <li>
                <span>성수천</span>
                <span>Todo 생성,Todo 삭제,Todo수정,메일전송</span>
              </li>
              <li>
                <span>진혁재</span>
                <span>스티커,카테고리,타이머,메일전송</span>
              </li>
            </ul>
          </div>
          <div className="frontend">
            <h2>프론트엔드 팀 </h2>
            <ul className="frontend_team">
              <li>
                <span>이상윤</span>
                <span>
                  페이지이동,메인페이지,메모페이지,마이페이지,인트로페이지
                </span>
              </li>
              <li>
                <span>정다혜</span>
                <span>
                  캘린더페이지, 스터디플랜페이지, 캘린더 기능,타이머기능,스티커
                  기능
                </span>
              </li>
            </ul>
          </div>
        </div>
        <ul className="source">
          <li>
            <span>
              <a href="https://github.com/LSYbuilds/study-hub">깃허브</a>
            </span>
          </li>
          <li>
            <span>
              <a href=" https://www.figma.com/file/upVpiisgB673vprVhodIvS/%EC%8A%A4%ED%84%B0%EB%94%94-%ED%94%8C%EB%9E%98%EB%84%88?type=design&node-id=0-1&mode=design&t=NoiEK7eL5wE1KQDJ-0">
                피그마
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="https://www.notion.so/planning-658a59f35cf14bf3b24af3e11322e1de">
                노션
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
