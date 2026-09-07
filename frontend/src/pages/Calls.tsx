import { useState } from "react";
import CallList from "../components/calls/CallList";
import type { Call } from "../types/call";

export default function Calls() {
  const [selected, setSelected] = useState<Call | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium text-white">Calls</h1>
        <button className="text-sm px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white">
          + Log Call
        </button>
      </div>

      <CallList onSelect={setSelected} />

      {selected && (
        <div className="mt-4 text-sm text-gray-400">
          Selected: {selected.clientName} — {selected.summary ?? "no summary"}
        </div>
      )}
    </div>
  );
}