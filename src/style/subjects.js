import styled from "@emotion/styled";


export const StudyPlanDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: auto;
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background: #fff;
    overflow: hidden;
    width: 125px;
    height: 40px;
    border-radius: 30px;
    text-align: center;
    .cate_input {
      position: absolute;
      left: -9999px;
    }
  }
  .active {
    background: skyblue;
  }
`;
