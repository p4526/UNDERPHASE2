import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 💡 이 임포트가 반드시 필요합니다.
import App from './App';
import './pages/global.css'; // 전역 스타일 파일도 올바른지 확인

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* 💡 App 컴포넌트가 반드시 BrowserRouter 안에 있어야 합니다. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// 👆 이 파일 전체 코드를 제공해 주세요.