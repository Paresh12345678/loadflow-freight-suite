import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("broker");

  const login = () => {
    if (role === "broker") navigate("/broker");
    if (role === "carrier") navigate("/carrier");
    if (role === "shipper") navigate("/shipper");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          width: "360px",
          boxShadow: "0 0 15px rgba(0,0,0,.1)",
        }}
      >
        <h2>LoadFlow</h2>
        <p>Freight Brokerage Operations Suite</p>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "20px" }}
        >
          <option value="broker">Broker</option>
          <option value="carrier">Carrier</option>
          <option value="shipper">Shipper</option>
        </select>

        <button
          onClick={login}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}