import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FilterSwitch.css";

export default function FilterSwitch() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const navigate = useNavigate();

  const options = [
    { id: 1, title: "통신사를 변경해도 괜찮아요!", desc: "번호이동 | 기기변경 | 신규가입" },
    { id: 2, title: "통신사 변경이 불가능해요", desc: "기기변경" },
  ];

  const handleNext = () => {
    if (selectedOption === null) {
      alert("옵션을 선택해주세요!");
      return;
    }
    navigate("/result"); // ✅ 다음 페이지로 이동 (추후 수정 가능)
  };

  return (
    <div className="switch-page">
      {/* 상단 헤더 */}
      <div className="switch-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <img src="/images/arrow_back_icon.png" alt="뒤로가기" className="back-icon" />
        </button>
        <div className="switch-text">
        <h2>통신사를 변경해도 되나요?</h2>
        <p>통신사를 변경하면 더 좋은 혜택을 받아요.</p>
        </div>
      </div>
      
      {/* 옵션 카드 목록 */}
      <div className="switch-list">
        {options.map((opt) => (
          <div
            key={opt.id}
            className={`switch-card ${
              selectedOption === opt.id ? "selected" : ""
            }`}
            onClick={() => setSelectedOption(opt.id)}
          >
            <h3>{opt.title}</h3>
            <p>{opt.desc}</p>
          </div>
        ))}
      </div>

      {/* 페이지 인디케이터 */}
      <div className="page-indicator">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot active"></span>
      </div>

      {/* 다음 버튼 */}
      <button className="next-button" onClick={handleNext}>
        내 주변 최저가 대리점 보러가기!
      </button>
    </div>
  );
}
