import React, { useState } from "react";
import { ImgModalForm } from "../style/imgModal";

const ImgModal = () => {
  const [uploadImage, setUploadImage] = useState(null);

  const handleFileChange = async event => {
    const sendKey = "file"; // 변경된 키값
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append(sendKey, file);

    try {
      const res = await fetch("/api/user?iuser=2", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("전송완료 : ", res);
      setUploadImage(URL.createObjectURL(file));
    } catch (error) {
      console.log("업로드 실패 : ", error);
    }
  };

  return (
    <ImgModalForm>
      <div className="imgModal_inner">
        <h3>기본형 이미지 업로드</h3>
        <div>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleFileChange}
          />
          {uploadImage && (
            <div>
              {uploadImage}
              <img src={uploadImage} alt="업로드이미지" />
            </div>
          )}
        </div>
      </div>
    </ImgModalForm>
  );
};

export default ImgModal;
