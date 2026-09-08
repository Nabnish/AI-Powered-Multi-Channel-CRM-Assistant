import { useState } from "react";
import ClientList from "../components/clients/ClientList";
import ClientDetail from "../components/clients/ClientDetail";
import type { Client } from "../types/client";

export default function Clients() {
  const [selected, setSelected] = useState<Client | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium text-white">Contacts</h1>
        <button className="text-sm px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white">
          + Add Contact
        </button>
      </div>

      <ClientList onSelect={setSelected} />

      {selected && (
        <ClientDetail client={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}