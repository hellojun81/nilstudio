import React, { useState } from "react";

const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const address = "서울 성동구 아차산로11가길 6";
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 후 메시지 원래 상태로
    }).catch((err) => console.error("클립보드 복사 실패:", err));
  };

  return (
    <div className="sub-container">
      <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        {/* 지도 이미지 */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/location.jpg`}
          alt="Location Map"
          style={{ width: "100%", maxWidth: "800px", marginBottom: "20px" }}
        />

  
        {/* Address Section */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Address</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.5", marginBottom: "20px" }}>
          Objective Studio, 278-33, Seongsu-dong 2(i)-ga, Seongdong-gu, Seoul, Republic of Korea
          <br />
          서울 성동구 아차산로11가길 6 (구:서울 성동구 성수동2가 278-33)
          <span 
        onClick={handleCopy} 
        style={{
          cursor: "pointer",
          color: copied ? "#333" : "#333",
          fontWeight: "bold",
          marginLeft: "10px",
          textDecoration: copied ? "none" : "underline"
        }}
      >
        {copied ? "✅ 복사됨!" : "📋 복사"}
        </span>
          <br /><br />
          <strong>KT 성수분국 노상공영주차장</strong> <br /> 서울 성동구 성수동 2가 280-50
          <br /><br />
          <strong>하이파킹우리W타워</strong> <br /> 서울 성동구 성수동2가 277-28 
          <br /><br />
           <strong>성수 우림e비즈센터 </strong> <br /> 서울 성동구 성수동2가 280-21 
          <br /><br />
       
        </p>

              {/* Parking Section */}
              <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Parking</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.5", marginBottom: "20px" }}>
          주차는 1대 가능하며 초과되는 차량은 인근 주차장 이용 바랍니다.
          <br /><br />
          인근 주차장 : <br />
          - KT 성수분국 노상공영주차장 (175m) : 서울 성동구 성수동 2가 280-50 / 평일 9-19시 운영 / 토요일 9-15시 운영 / 공휴일 무료 개방 <br />
          - 하이파킹우리W타워 (190m) : 서울 성동구 성수동2가 277-28 / 전일 7-22시 운영 <br />
          - 성수 우림e비즈센터 (220m) : 서울 성동구 성수동2가 280-21 / 전일 7-22시 운영 <br />
        
         
        </p>


        {/* Contact Section */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Contact</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
          📞 010.4376.4057
          <br />
          20시 이후 DM 문의 부탁드립니다.
          <br /><br />
          📷 <a href="https://www.instagram.com/objectivestudio_" target="_blank" rel="noopener noreferrer">@objectivestudio_</a>
          <br /><br />
          ✉️ <a href="mailto:objectivestudio@naver.com">objectivestudio@naver.com</a>
        </p>
      </div>
    </div>
  );
};

export default Location;
