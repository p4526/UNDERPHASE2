import React, {useState} from "react";
import UnderPhase from "../assets/UnderPhase.png";

export default function Footer() {

  const [isOpne, termsOfUse, privacyPolicy, copyright ] = useState(false);

  return (
    <footer className="footer">
      <div className="Asset-img-logo" style={{ height: 22}}>
        <img src={UnderPhase} alt="UnderPhase_logo"  width={140} height={22}></img>
      </div>
      <div className="legal-Notice">
        <button className="termOfUse-but" onClick={() => termsOfUse(true)}>이용약관</button>
        <button className="privacyPolicy-but" onClick={() => privacyPolicy(true)}>개인정보처리방침</button>
        <button className="copyright-but" onClick={() => copyright(true)}>저작권 표시</button>
      </div>
      <div className="business-info">
        <div className="business-name">
          <p>언더페이즈</p>
        </div>
        <div className="business-container">
          <div className="business-no">
            <p>사업자등록번호.</p>
            <p>627-04-03076</p>
          </div>
          <div className="registration-no">
            <p>통신판매업 신고번호.</p>
            <p>2025-부산진-0529</p>
          </div>
          <div className="address">
            <p>주소.</p>
            <p>부산광역시 부산진구 엄광로176, 23동 307호(가야동, 동의대학교)</p>
          </div>

          
        </div>
        <div className="customerService">
          <p>전화번호.</p>
          <p>070-8064-4541</p>

          <p>이메일.</p>
          <p>help.yojeong@underphase.com</p>
        </div>

      </div>
    </footer>
  );
}