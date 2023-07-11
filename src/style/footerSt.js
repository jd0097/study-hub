import styled from "@emotion/styled";

export const FooterStyle = styled.div`
  width: 100%;
  height: 200px;
  background: rgb(204, 226, 250);
  padding: 30px 0px;
  .footer_inner {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
    height: 100%;
    color: #191919;
    font-size: 12px;
    .footer_left {
      width: 50%;
      height: 100%;
      .page_info {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        gap: 3px;
        width: 100%;
        height: auto;
        padding-bottom: 15px;
        border-bottom: 1px solid #c3c3c3;
        li {
          display: flex;
          span {
            display: flex;
            position: relative;
            margin-right: 10px;
          }
        }
      }
    }
    .footer_right {
      display: flex;
      width: 50%;
      height: 100%;
      .privacy {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: auto;
        height: auto;
      }
    }
  }
`;
