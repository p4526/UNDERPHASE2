import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilterDevice from "./pages/FilterDevice";
import FilterCurrentCarrier from"./pages/FilterCurrentCarrier";
import FilterSwitch from "./pages/FilterSwitch";
import ShopList from "./pages/ShopList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FilterDevice />} />
        <Route path="/carrier" element={<FilterCurrentCarrier />} />
        <Route path="/switch" element={<FilterSwitch />} />
        <Route path="/list" element={<ShopList />} />
      </Routes>
    </Router> 
  );
}

export default App;