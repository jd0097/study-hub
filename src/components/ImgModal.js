import React, { useState } from "react";
import axios from "axios";
import { ImgModalForm } from "../style/imgModal";

const ImgModal = () => {
  const [uploadImage, setUploadImage] = useState(null);
  // 업로드하고 나서 컨텐츠 상 보여줄 이미지
  const [charImg, setCharImg] = useState(null);

  // 이미지 선택 처리 핸들러
  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      // 이미지가 임시파일로 웹브라우저에 로드완료되면
      reader.onloadend = () => {
        // state 변경한다.
        console.log(reader.result);
        setUploadImage(reader.result);
      };
      // 임시 파일을 읽어들인다.
      reader.readAsDataURL(file);
    }
  };

  const handleFileRemove = () => {
    setUploadImage(null);
  };

  // 파일 업로드
  const handleFileUpload = async () => {
    // 수정 : 활용합니다.
    const sendUrl = "/upload";
    const sendKye = "profile";
    if (uploadImage) {
      const formData = new FormData();
      formData.append(sendKye, uploadImage);
      try {
        const res = await axios.post(sendUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("전송완료 : ", res);
        // 서버가 정상적으로 업데이트 되고 나서 URL 줄때
        const serverStatus = res.status.toString();
        console.log(serverStatus.charAt(0));
        if (serverStatus.charAt(0) === "2") {
          setCharImg("서버의 이미지 주소 URL");
        } else {
          // 데모 버전에서 프론트에서 처리
          setCharImg(uploadImage);
        }
      } catch (error) {
        console.log("데이터 전송 실패", error);
        // 데모 버전에서 프론트에서 처리
        setCharImg(uploadImage);
      }
    }
  };

  // 화면에 이미지 미리보기 보여주는 함수
  const renderImagePreview = () => {
    if (uploadImage) {
      console.log(uploadImage);
      return (
        <div>
          {uploadImage}
          <img src={uploadImage} alt="업로드이미지" />
          <button onClick={handleFileRemove}>지우기</button>
          <button onClick={handleFileUpload}>업로드</button>
        </div>
      );
    }
    return null;
  };

  return (
    <ImgModalForm>
      <div className="imgModal_inner">
        <h3>미리보기 Axios 업로드</h3>
        <div>
          {/* 이미지 미리보기 출력 */}
          {renderImagePreview()}
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleFileChange}
          />
        </div>
        {charImg && (
          <div>
            <h4>사용자 캐릭터 이미지</h4>
            <span
              style={{
                display: "block",
                width: "50px",
                height: "50px",
                overflow: "hidden",
                background: "hotpink",
              }}
            >
              <img
                src={charImg}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </span>
          </div>
        )}
      </div>
    </ImgModalForm>
  );
};

export default ImgModal;
