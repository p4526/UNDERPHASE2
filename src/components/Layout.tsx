import React from "react";
import Header from "./Header"; // 상단 길잡이 역할 부분
import Button from "./Button";
// import Footer from "./Footer"; // 하단 웹사이트 마무리 정보 부분
import "./Layout.css";
import Footer from "./Footer";
import ProgressSection from "./ProgressSection";
import { tr } from "framer-motion/client";

interface Props {
  title: string;   // 페이지마다 다른 메인 타이틀 적용
  subtitle?: string; // 페이지마다 다른 서브 타이틀 적용
  showFooter?: boolean;
  showProgress?: boolean;
  step?: number; 
  buttonLabel?: string;
  onButtonClick?: () => void;
  children: React.ReactNode; // Layout 컴포넌트 안에 들어오는 중단 영역 콘텐츠
}

export default function Layout({
  title,
  subtitle,
  showFooter = false,
  showProgress = true,
  step = 1,
  buttonLabel,
  onButtonClick,
  children,
}: Props) {
  return (
    <div className="layout">
      <Header title={title} subtitle={subtitle} />

      <main className="body">
        {children}
      </main>

      {/* 하단부(도트 + 버튼) */}
      {showProgress && (
        <div className="bottom-area">
          <ProgressSection
            step={step}
            buttonLabel={buttonLabel ?? "다음으로"}
            onClick={onButtonClick}
          />
        </div>
      )}

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
}