import { useEffect, useState } from "react";
import type { Call } from "../../types/call";
import { getCalls } from "../../api/calls";
import CallCard from "./CallCard";

interface Props {
  clientId?: string;
  onSelect?: (call: Call) => void;
}

export default function CallList({ clientId, onSelect }: Props) {
  const [calls, setCalls] = useState<Call[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.resolve().then(()=>setLoading(true));
    getCalls(clientId)
      .then(setCalls)
      .catch(() => setError("Failed to load calls"))
      .finally(() => setLoading(false));
  }, [clientId]);

  if (loading) return <p className="text-sm text-gray-400">Loading calls...</p>;
  if (error) return <p className="text-sm text-red-400">{error}</p>;
  if (calls.length === 0)
    return <p className="text-sm text-gray-400">No calls yet.</p>;

  return (
    <div className="flex flex-col gap-2">
      {calls.map((call) => (
        <CallCard key={call.id} call={call} onClick={onSelect} />
      ))}
    </div>
  );
}