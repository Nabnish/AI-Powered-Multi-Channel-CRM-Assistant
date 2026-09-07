import { useState } from "react";
import EmailList from "../components/emails/EmailList";
import type { Email } from "../types/email";

export default function Emails() {
  const [selected, setSelected] = useState<Email | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium text-white">Emails</h1>
        <button className="text-sm px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white">
          + Compose
        </button>
      </div>

      <EmailList onSelect={setSelected} />

      {selected && (
        <div className="mt-4 text-sm text-gray-400">
          Selected: {selected.subject} — from {selected.clientName}
        </div>
      )}
    </div>
  );
}