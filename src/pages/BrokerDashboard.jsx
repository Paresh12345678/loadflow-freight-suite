import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { mockLoads } from "../data/mockLoads";

export default function BrokerDashboard() {
  const [loads, setLoads] = useState(mockLoads);

  const [form, setForm] = useState({
    origin: "",
    destination: "",
    commodity: "",
    equipment: "",
    rate: "",
  });

  const addLoad = () => {
    if (!form.origin || !form.destination) return;

    const newLoad = {
      id: `LD-${1000 + loads.length + 1}`,
      origin: form.origin,
      destination: form.destination,
      commodity: form.commodity,
      equipment: form.equipment,
      rate: form.rate,
      status: "Posted",
    };

    setLoads([...loads, newLoad]);

    setForm({
      origin: "",
      destination: "",
      commodity: "",
      equipment: "",
      rate: "",
    });
  };

  return (
    <DashboardLayout title="Broker Dashboard">
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Create New Load</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Origin"
            value={form.origin}
            onChange={(e) =>
              setForm({ ...form, origin: e.target.value })
            }
          />

          <input
            className="border p-2 rounded"
            placeholder="Destination"
            value={form.destination}
            onChange={(e) =>
              setForm({ ...form, destination: e.target.value })
            }
          />

          <input
            className="border p-2 rounded"
            placeholder="Commodity"
            value={form.commodity}
            onChange={(e) =>
              setForm({ ...form, commodity: e.target.value })
            }
          />

          <input
            className="border p-2 rounded"
            placeholder="Equipment"
            value={form.equipment}
            onChange={(e) =>
              setForm({ ...form, equipment: e.target.value })
            }
          />

          <input
            className="border p-2 rounded"
            placeholder="Rate ($)"
            value={form.rate}
            onChange={(e) =>
              setForm({ ...form, rate: e.target.value })
            }
          />
        </div>

        <button
          onClick={addLoad}
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          Create Load
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Load Board</h2>

        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">ID</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Commodity</th>
              <th>Equipment</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {loads.map((load) => (
              <tr key={load.id} className="border-b">
                <td className="py-3">{load.id}</td>
                <td>{load.origin}</td>
                <td>{load.destination}</td>
                <td>{load.commodity || "-"}</td>
                <td>{load.equipment || "-"}</td>
                <td>{load.rate || "-"}</td>
                <td>{load.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}