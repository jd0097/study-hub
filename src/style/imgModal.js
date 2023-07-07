import styled from "@emotion/styled";

export const ImgModalForm = styled.div`
  position: fixed;
  z-index: 9999999999;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  .imgModal_inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 500px;
    background: #fff;
    border-radius: 50px;
  }
`;
