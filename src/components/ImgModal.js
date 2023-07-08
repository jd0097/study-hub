import React, { useState } from "react";
import { ImgModalForm } from "../style/imgModal";

const ImgModal = () => {
  //   const [uploadImage, setUploadImage] = useState(null);

//   const [uploadImage, setUploadImage] = useState(null);
//   const [chatImg, setCharImg] = useState(null);

//   const handleFileChange = e => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         console.log(reader.result);
//         setUploadImage(reader.result);
//       };

//       //   임시파일을 읽어드린다.
//       reader.readAsDataURL(file);
//     }
//   };

//   //   임시파일 지우기

//   const handFileRemove = () => {
//     setUploadImage(null);
//   };

//   const handleFileUpload = async () => {
//     // 수정 : 활용합니다.
//     const sendUrl = "/upload";
//     const sandKey = "profile";

//     if (uploadImage){
//         const formData = new FormData();
        
//     }
//   }

//   //   const handleFileChange = async event => {
//   //     const sendKey = "file"; // 변경된 키값
//   //     const file = event.target.files[0];

//   //     const formData = new FormData();
//   //     formData.append(sendKey, file);

//   //     try {
//   //       const res = await axios.fetch("/api/user?iuser=2", {
//   //         method: "POST",
//   //         body: formData,
//   //         headers: {
//   //           "Content-Type": "multipart/form-data",
//   //         },
//   //       });
//   //       console.log("전송완료 : ", res);
//   //       setUploadImage(URL.createObjectURL(file));
//   //     } catch (error) {
//   //       console.log("업로드 실패 : ", error);
//   //     }
//   //   };

  return (
    <ImgModalForm>
      <div className="imgModal_inner">
        <h3>미리보기 Axios 업로드</h3>
        <div>
          {/* 이미지 미리보기 출력 */}
          {/* {renderImagePreview()} */}
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
          />
        </div>
        {/* {charImg && (
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
        )} */}
      </div>
    </ImgModalForm>
  );
};

export default ImgModal;
