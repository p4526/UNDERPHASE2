import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilterDevice from "./pages/FilterDevice";
import FilterCurrentCarrier from "./pages/FilterCurrentCarrier";
import FilterSwitch from "./pages/FilterSwitch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FilterDevice />} />
        <Route path="/carrier" element={<FilterCurrentCarrier />} />
        <Route path="/filter-switch" element={<FilterSwitch />} />
      </Routes>
    </Router> 
  );
}

export default App;
