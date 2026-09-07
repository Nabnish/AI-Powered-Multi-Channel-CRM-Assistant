import { useState } from "react";
import LeadList from "../components/leads/LeadList";
import type { Lead } from "../types/lead";

export default function Leads() {
  const [selected, setSelected] = useState<Lead | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium text-white">Leads</h1>
        <button className="text-sm px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white">
          + Add Lead
        </button>
      </div>

      <LeadList onSelect={setSelected} />

      {selected && (
        <div className="mt-4 text-sm text-gray-400">
          Selected: {selected.name} — score {selected.score}, next best
          action: {selected.nextBestAction ?? "none yet"}
        </div>
      )}
    </div>
  );
}