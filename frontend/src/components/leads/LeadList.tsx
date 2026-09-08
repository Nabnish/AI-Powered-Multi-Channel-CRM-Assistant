import { useEffect, useState } from "react";
import type { Lead } from "../../types/lead";
import { getLeads } from "../../api/leads";
import LeadCard from "./LeadCard";

interface Props {
  onSelect?: (lead: Lead) => void;
}

export default function LeadList({ onSelect }: Props) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getLeads()
      .then(setLeads)
      .catch(() => setError("Failed to load leads"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-sm text-gray-400">Loading leads...</p>;
  if (error) return <p className="text-sm text-red-400">{error}</p>;
  if (leads.length === 0)
    return <p className="text-sm text-gray-400">No leads yet.</p>;

  return (
    <div className="flex flex-col gap-2">
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} onClick={onSelect} />
      ))}
    </div>
  );
}