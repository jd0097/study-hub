import styled from "@emotion/styled";

export const MemoModalForm = styled.div`
  position: fixed;
  z-index: 9999999999;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  .memo_modal_inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 200px;
    background: #fff;
    border-radius: 50px;
    .sumbit_buttons {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      gap: 20px;
      width: 100%;
      height: 35px;
      button {
        width: 20%;
        border-radius: 300px;
        border: none;
        background: skyblue;
      }
    }
  }
`;
