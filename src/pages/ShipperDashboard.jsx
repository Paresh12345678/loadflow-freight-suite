import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function ShipperDashboard() {
  const [shipments] = useState([
    {
      id: "LD-1001",
      origin: "Dallas",
      destination: "Chicago",
      carrier: "ABC Trucking",
      status: "In Transit",
      eta: "Tomorrow",
    },
    {
      id: "LD-1004",
      origin: "Seattle",
      destination: "Portland",
      carrier: "Prime Logistics",
      status: "Delivered",
      eta: "Delivered",
    },
    {
      id: "LD-1008",
      origin: "Houston",
      destination: "Atlanta",
      carrier: "Fast Freight",
      status: "Assigned",
      eta: "2 Days",
    },
  ]);

  return (
    <DashboardLayout title="Shipper Dashboard">
      <div className="grid grid-cols-4 gap-6 mb-6">

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Total Shipments</h3>
          <p className="text-3xl font-bold">{shipments.length}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">In Transit</h3>
          <p className="text-3xl font-bold">
            {shipments.filter(s => s.status === "In Transit").length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Delivered</h3>
          <p className="text-3xl font-bold">
            {shipments.filter(s => s.status === "Delivered").length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Pending</h3>
          <p className="text-3xl font-bold">
            {shipments.filter(s => s.status === "Assigned").length}
          </p>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">
          My Shipments
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">Load ID</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Carrier</th>
              <th>Status</th>
              <th>ETA</th>
            </tr>
          </thead>

          <tbody>
            {shipments.map((load) => (
              <tr key={load.id} className="border-b">
                <td className="py-3">{load.id}</td>
                <td>{load.origin}</td>
                <td>{load.destination}</td>
                <td>{load.carrier}</td>
                <td>{load.status}</td>
                <td>{load.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}