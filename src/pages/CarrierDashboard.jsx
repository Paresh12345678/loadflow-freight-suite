import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function CarrierDashboard() {
  const [loads, setLoads] = useState([
    {
      id: "LD-1002",
      origin: "Atlanta",
      destination: "Miami",
      rate: "$1800",
      status: "Assigned",
    },
    {
      id: "LD-1005",
      origin: "Dallas",
      destination: "Houston",
      rate: "$1200",
      status: "Assigned",
    },
    {
      id: "LD-1007",
      origin: "Chicago",
      destination: "Detroit",
      rate: "$950",
      status: "In Transit",
    },
  ]);

  const updateStatus = (id, status) => {
    setLoads(
      loads.map((load) =>
        load.id === id ? { ...load, status } : load
      )
    );
  };

  return (
    <DashboardLayout title="Carrier Dashboard">
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Assigned Loads</h3>
          <p className="text-3xl font-bold">{loads.length}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">In Transit</h3>
          <p className="text-3xl font-bold">
            {loads.filter((l) => l.status === "In Transit").length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Delivered</h3>
          <p className="text-3xl font-bold">
            {loads.filter((l) => l.status === "Delivered").length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Compliance</h3>
          <p className="text-green-600 text-2xl font-bold">Active</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Assigned Loads</h2>

        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">Load ID</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Rate</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loads.map((load) => (
              <tr key={load.id} className="border-b">
                <td className="py-3">{load.id}</td>
                <td>{load.origin}</td>
                <td>{load.destination}</td>
                <td>{load.rate}</td>

                <td>
                  <select
                    value={load.status}
                    onChange={(e) =>
                      updateStatus(load.id, e.target.value)
                    }
                    className="border rounded px-2 py-1"
                  >
                    <option>Assigned</option>
                    <option>Picked Up</option>
                    <option>In Transit</option>
                    <option>Delivered</option>
                  </select>
                </td>

                <td className="space-x-2">
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    onClick={() => alert("Load Accepted")}
                  >
                    Accept
                  </button>

                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => alert("Load Rejected")}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <h2 className="text-xl font-bold mb-4">Compliance Documents</h2>

        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">Document</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">Insurance Certificate</td>
              <td className="text-green-600 font-semibold">Valid</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Operating Authority</td>
              <td className="text-green-600 font-semibold">Valid</td>
            </tr>

            <tr>
              <td className="py-3">W-9</td>
              <td className="text-yellow-600 font-semibold">
                Expiring Soon
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}