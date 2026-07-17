import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import BrokerDashboard from "./pages/BrokerDashboard";
import CarrierDashboard from "./pages/CarrierDashboard";
import ShipperDashboard from "./pages/ShipperDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/broker" element={<BrokerDashboard />} />
        <Route path="/carrier" element={<CarrierDashboard />} />
        <Route path="/shipper" element={<ShipperDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;