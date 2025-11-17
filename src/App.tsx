// src/App.tsx
import { Routes, Route } from "react-router-dom"; // BrowserRouter 임포트 제거
import FilterDevice from "./pages/FilterDevice";

function App() {
  return (
    // <Router> 대신 <Routes>만 사용
    <Routes>
      <Route path="/" element={<FilterDevice />} />
    </Routes>
  );
}

export default App;