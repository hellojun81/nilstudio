import React from "react";

const Equipment: React.FC = () => {
  return (
    <div className="sub-container">
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontStyle: "italic", fontSize: "2rem" }}>Equipment</h1>

      <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>제공물품</h2>

      {/* A Zone */}
      {/* <h3 style={{ fontSize: "1.3rem", marginTop: "15px" }}>A zone</h3> */}
      <p>
        * 블루투스 스피커 2 | 스팀다리미 1 | 무선인터넷(Wifi)  | 릴선 1 | 이동식촬영테이블 1
        <br />
        접이식테이블 3 |  접이식의자 10 | 행거 3 (옷걸이X) | 전신거울 1 |
        C스탠드 2
      </p>
    </div>
    </div>
  );
};

export default Equipment;
