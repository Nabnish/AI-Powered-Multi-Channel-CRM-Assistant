import { useEffect, useState } from "react";
import type { Email } from "../../types/email";
import { getEmails } from "../../api/emails";
import EmailCard from "./EmailCard";

interface Props {
  clientId?: string;
  onSelect?: (email: Email) => void;
}

export default function EmailList({ clientId, onSelect }: Props) {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.resolve().then(()=>setLoading(true));
    getEmails(clientId)
      .then(setEmails)
      .catch(() => setError("Failed to load emails"))
      .finally(() => setLoading(false));
  }, [clientId]);

  if (loading) return <p className="text-sm text-gray-400">Loading emails...</p>;
  if (error) return <p className="text-sm text-red-400">{error}</p>;
  if (emails.length === 0)
    return <p className="text-sm text-gray-400">No emails yet.</p>;

  return (
    <div className="flex flex-col gap-2">
      {emails.map((email) => (
        <EmailCard key={email.id} email={email} onClick={onSelect} />
      ))}
    </div>
  );
}
