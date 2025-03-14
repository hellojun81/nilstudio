import React from "react";
import { Pencil, Calendar, CheckCircle, Send } from "lucide-react"; // 아이콘 사용
import "./../assets/styles/Guide.css";

const Guide: React.FC = () => {
  return (
    <div className="sub-container">
      <div className="rental-guide-container">
        <h1 className="title">Rental Guide</h1>
        <p className="description">
          저희 닐 스튜디오는 3층에 위치 해 있으며  최고층고 3.9미터에 100평 규모에 자연광 스튜디오 입니다. 
        </p>



        {/* <p className="note">
          최소 기본 예약시간 <strong>4시간</strong> 입니다.
        </p>
        <p className="note">
          기본 5인 초과시 시간당 1인<strong>5000원</strong>에 추가 요금이 발생합니다.
        </p> */}

        {/* <div className="steps">
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
        </div> */}





        <div className="reservation-info">
          <h2>예약 안내</h2>
          <p>∙예약문의는 전화, 문자, 이메일, DM을 통해 연락주시길 바랍니다.</p>
          <p>[업체명 / 대관목적 / 대관희망일 / 사용인원 / 대관시간]</p>
          <p>∙ 사전답사 원하실 경우 사전 조율 부탁드립니다.</p>
          <p className="note"  style={{ textAlign: 'left' }}>∙ 대관은 최소 4시간 부터 가능하며 5인기준 시간당 10만원 입니다. 초과 인원 발생시 1인 시간당(5000원)입니다</p>
          <p>∙ 예약금 입금계좌 : 기업은행 027-162297-04-021 ㈜타울</p>
          <p>∙ email:taulcontact@gmail.com</p>
          <p>∙ tel:01031019551</p>
          {/* <p>∙ 계약진행 : 정산은 계약금(전체대금의 50%)납부 → 이용 → 잔금납부 → 세금계산서 발행 순서로 진행됩니다.</p> */}
       
        </div>

        <div className="usage-guide">
          <h2>이용 안내</h2>
          <p>✅ 이용 시간은 입장과 퇴장 시간을 모두 포함한 시간입니다.</p>
          <p>✅ 스튜디오 내 촬영 후 쓰레기는 반드시 정리 후 퇴장 부탁드립니다.</p>
          <p>✅ 예약 시간 초과 시 추가 비용이 발생할 수 있습니다.</p>
        </div>

        <div className="cancel-policy">
          <h2>예약 변경 및 취소</h2>
          <p>∙ 예약취소 : 촬영 15일내 취소시 전체대금의 30% 위약금 발생</p>
          <p>촬영 10일내 취소시 전체대금의 50% 위약금 발생</p>
          <p>촬영 7일내 취소시 전체대금의 70% 위약금 발생</p>
          <p>촬영 3일내 취소시 전체대금의 90% 위약금 발생</p>
          <p>촬영 당일 취소시 전체대금의 100% 위약금 발생</p>
        </div>
      </div>
    </div>
  );
};

export default Guide;
