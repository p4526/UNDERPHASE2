import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FilterCurrentCarrier.css";

export default function FilterCurrentCarrier() {
  const [selectedCarrier, setSelectedCarrier] = useState<number | null>(null);
  const navigate = useNavigate();

  const carriers = [
    { id: 1, name: "SKT", desc: "가입자 수 국내 1위" },
    { id: 2, name: "KT", desc: "안정적인 속도와 커버리지" },
    { id: 3, name: "LG U+", desc: "합리적인 요금과 다양한 혜택" },
  ];

  const handleNext = () => {
    if (selectedCarrier === null) {
      alert("통신사를 선택해주세요!");
      return;
    }
    navigate("/filter-switch"); // ✅ 다음 단계 페이지로 이동 (추후 수정 가능)
  };

  return (
   <div className="carrier-page">
      {/* ✅ 광고 배너 영역 */}
      <div className="carrier-banner">
        <div className="carrier-text">
            <p style={{fontSize: '18px', fontWeight: 'bold', color: '#111111', lineHeight: '20px'}} >현재 사용 중인 통신사가 어디인가요?</p>
            <p style={{fontSize: '15px', color: '#', lineHeight: '20px'}}>최저가 분석을 위해 꼭 알아야해요.</p>
        </div>
      </div>  

      {/* 통신사 카드 목록 */}
      <div className="carrier-list">
        {carriers.map((carrier) => (
          <div
            key={carrier.id}
            className={`carrier-card ${
              selectedCarrier === carrier.id ? "selected" : ""
            }`}
            onClick={() => setSelectedCarrier(carrier.id)}
          >
            <div className="carrier-text">
              <h3>{carrier.name}</h3>
              <p>{carrier.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 버튼 뒤 그라데이션 (오버레이 전용) */}
      <div className="bottom-fade" aria-hidden="true" />

      {/* 페이지 인디케이터 */}
      <div className="page-indicator">
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>

      {/* 다음 버튼 */}
      <button className="next-button" onClick={handleNext}>
        다음으로
      </button>
    </div>
  );
}
