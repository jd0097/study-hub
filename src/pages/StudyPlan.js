import React, { useState } from 'react';
import StudyPlanDiv from '../style/subjects';

const StudyPlan = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleClick = (subject) => {
    console.log(`Clicked subject: ${subject}`);
    setSelectedSubject(subject);

    // 클릭된 과목에 따른 추가 동작 수행
    if (subject === '국어') {
      // 국어에 대한 동작 수행
      // ...
    } else if (subject === '영어') {
      // 영어에 대한 동작 수행
      // ...
    } else if (subject === '수학') {
      // 수학에 대한 동작 수행
      // ...
    } else if (subject === '과학') {
      // 과학에 대한 동작 수행
      // ...
    } else if (subject === '사회') {
      // 사회에 대한 동작 수행
      // ...
    }
  };

  const handleSubmit = () => {
    // 게시물 생성 동작 수행
    console.log('Title:', title);
    console.log('Content:', content);

    // 추가 동작 수행
    // ...
  };

  const subjects = ['국어', '영어', '수학', '과학', '사회']; // subjects 배열 정의

  return (
    <div>
      <h1>Study Plan</h1>
      <StudyPlanDiv>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="큰 제목 입력"
        />
        <br />
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => handleClick(subject)}
            style={{ marginRight: '10px' }}
            className={selectedSubject === subject ? 'selected' : ''}
          >
            {subject}
          </button>
        ))}
        <br />
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="내용 작성"
          rows={4}
          cols={50}
        ></textarea>
        <br />
        <button onClick={handleSubmit}>게시물 생성</button>
      </StudyPlanDiv>
    </div>
  );
};

export default StudyPlan;