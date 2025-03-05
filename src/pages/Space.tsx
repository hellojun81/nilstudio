import React, { useEffect, useState } from "react";
import imageData from "../assets/images/imageList.json"; // JSON 데이터 불러오기
import "./../assets/styles/Space.css";

const Space: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia("(max-width: 768px)").matches
  );
  const [imageList, setImageList] = useState<string[]>([]);

  useEffect(() => {
    // 화면 크기 변경 감지
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    // 현재 기기(모바일/PC)에 맞는 폴더 선택 후 JSON 데이터에서 로드
    const folder = isMobile ? "height" : "width";
    const images = imageData[folder].map(
      (fileName) => `${process.env.PUBLIC_URL}/assets/images/${folder}/${fileName}`
    );
    setImageList(images);
  }, [isMobile]);

  return (
    <div className="sub-container">
    <div className="space-container">
      <div className="image-grid">
        {imageList.map((image, index) => (
          <img key={index} src={image} alt={`Studio ${index + 1}`} className="space-image" />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Space;
