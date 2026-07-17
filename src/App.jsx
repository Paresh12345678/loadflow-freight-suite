import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import BrokerDashboard from "./pages/BrokerDashboard";
import CarrierDashboard from "./pages/CarrierDashboard";
import ShipperDashboard from "./pages/ShipperDashboard";
import Compliance from "./pages/Compliance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/broker" element={<BrokerDashboard />} />
        <Route path="/carrier" element={<CarrierDashboard />} />
        <Route path="/shipper" element={<ShipperDashboard />} />
        <Route path="/compliance" element={<Compliance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;