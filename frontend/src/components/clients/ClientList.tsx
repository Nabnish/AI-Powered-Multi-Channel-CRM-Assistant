import { useEffect, useState } from "react";
import type { Client } from "../../types/client";
import { getClients } from "../../api/clients";
import ClientCard from "./ClientCard";

interface Props {
  onSelect?: (client: Client) => void;
}

export default function ClientList({ onSelect }: Props) {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getClients()
      .then(setClients)
      .catch(() => setError("Failed to load clients"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-sm text-gray-400">Loading contacts...</p>;
  if (error) return <p className="text-sm text-red-400">{error}</p>;
  if (clients.length === 0)
    return <p className="text-sm text-gray-400">No contacts yet.</p>;

  return (
    <div className="flex flex-col gap-2">
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} onClick={onSelect} />
      ))}
    </div>
  );
}