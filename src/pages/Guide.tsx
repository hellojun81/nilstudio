import React from "react";
import { Pencil, Calendar, CheckCircle, Send } from "lucide-react"; // 아이콘 사용
import "./../assets/styles/Guide.css";

const Guide: React.FC = () => {
  return (
    <div className="sub-container">
    <div className="rental-guide-container">
      <h1 className="title">Rental Guide</h1>
      <p className="description">
        저희 오브젝티브 스튜디오는 A studio와 B studio 두개의 zone으로 <strong>전체 10명</strong>이 단독 사용 가능합니다.
      </p>

      <div className="studio-info">
        <p>📌 A studio 70평대</p>
        <p>📌 B studio 30평대</p>
      </div>

      <p className="note">
        한 개의 세트는 최소 기본 예약시간 <strong>4시간</strong> / B존 기본 예약시간 <strong>4시간</strong>입니다.
      </p>

      <div className="steps">
        <div className="step">
          <Calendar size={32} />
          <h3>Step 1</h3>
          <p>원하는 일정 확인 후 예약 신청</p>
        </div>
        <div className="step">
          <Pencil size={32} />
          <h3>Step 2</h3>
          <p>예약 신청 후 DM으로 연락 (20시 이후 연락 가능)</p>
        </div>
        <div className="step">
          <CheckCircle size={32} />
          <h3>Step 3</h3>
          <p>문자 확인 후 입금 계좌 전달</p>
        </div>
        <div className="step">
          <Send size={32} />
          <h3>Step 4</h3>
          <p>예약금 입금 후 예약 확정</p>
        </div>
      </div>

      <div className="reservation-info">
        <h2>예약 안내</h2>
        <p>📌 예약은 최소 4시간 이상부터 가능합니다.</p>
        <p>📌 예약 확정 후 입금 완료 시 예약이 확정됩니다.</p>
        <p>📌 24시간 이내 예약 취소 시 예약금 환불이 불가합니다.</p>
      </div>

      <div className="usage-guide">
        <h2>이용 안내</h2>
        <p>✅ 이용 시간은 입장과 퇴장 시간을 모두 포함한 시간입니다.</p>
        <p>✅ 스튜디오 내 촬영 후 쓰레기는 반드시 정리 후 퇴장 부탁드립니다.</p>
        <p>✅ 예약 시간 초과 시 추가 비용이 발생할 수 있습니다.</p>
      </div>

      <div className="cancel-policy">
        <h2>예약 변경 및 취소</h2>
        <p className="warning">📌 예약 변경은 촬영일 기준 7일 전까지만 가능하며, 이후에는 취소가 어렵습니다.</p>
        <p className="warning">📌 촬영일 기준 3일 전부터는 50%만 환불됩니다.</p>
      </div>
    </div>
    </div>
  );
};

export default Guide;
