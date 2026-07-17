import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Compliance() {
  const [records, setRecords] = useState([
    {
      carrier: "ABC Trucking",
      insurance: "2027-03-15",
      mcdot: "Active",
      equipment: "Dry Van",
      status: "Compliant",
    },
    {
      carrier: "Prime Logistics",
      insurance: "2026-08-30",
      mcdot: "Active",
      equipment: "Flatbed",
      status: "Compliant",
    },
    {
      carrier: "Fast Freight",
      insurance: "2025-01-12",
      mcdot: "Expired",
      equipment: "Reefer",
      status: "Non-Compliant",
    },
  ]);

  return (
    <DashboardLayout title="Compliance Management">
      <div className="grid grid-cols-3 gap-6 mb-6">

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Total Carriers</h3>
          <p className="text-3xl font-bold">{records.length}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Compliant</h3>
          <p className="text-3xl text-green-600 font-bold">
            {records.filter(r => r.status === "Compliant").length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">Non-Compliant</h3>
          <p className="text-3xl text-red-600 font-bold">
            {records.filter(r => r.status === "Non-Compliant").length}
          </p>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-bold mb-4">
          Carrier Compliance Records
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">Carrier</th>
              <th>Insurance Expiry</th>
              <th>MC/DOT</th>
              <th>Equipment</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {records.map((r, index) => (
              <tr key={index} className="border-b">

                <td className="py-3">{r.carrier}</td>

                <td>{r.insurance}</td>

                <td>{r.mcdot}</td>

                <td>{r.equipment}</td>

                <td>
                  <span
                    className={
                      r.status === "Compliant"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {r.status}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>
        </table>

      </div>
    </DashboardLayout>
  );
}