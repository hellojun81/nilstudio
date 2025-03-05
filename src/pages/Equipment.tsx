import React from "react";

const Equipment: React.FC = () => {
  return (
    <div className="sub-container">
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontStyle: "italic", fontSize: "2rem" }}>Equipment</h1>

      <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>제공물품</h2>

      {/* A Zone */}
      <h3 style={{ fontSize: "1.3rem", marginTop: "15px" }}>A zone</h3>
      <p>
        * 블루투스 스피커 1 | 스팀다리미 1 | 무선인터넷(Wifi) | 연장선 4 | 릴선 2 | 이동식촬영테이블 1
        <br />
        접이식테이블 3 | 스툴 13 | 스탠스툴 14 | 접이식의자 1 | 행거 2 (옷걸이X) | 전신거울 1 |
        C스탠드 대 1 / 소 1
      </p>

      {/* B Zone */}
      <h3 style={{ fontSize: "1.3rem", marginTop: "15px" }}>B zone</h3>
      <p>
        * 블루투스 스피커 1 | 스팀다리미 1 | 무선인터넷(Wifi) | 연장선 2
        <br />
        접이식테이블 2 | 접이식의자 1 | 행거 2 (옷걸이X) | 전신거울 1
      </p>
    </div>
    </div>
  );
};

export default Equipment;
