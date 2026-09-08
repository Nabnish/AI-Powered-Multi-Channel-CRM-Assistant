import { useEffect, useState } from "react";
import type { Client } from "../../types/client";
import type { ChatSummary } from "../../types/chat";
import { getChatSummaries } from "../../api/chat";
import { X } from "lucide-react";

interface Props {
  client: Client;
  onClose: () => void;
}

export default function ClientDetail({ client, onClose }: Props) {
  const [summaries, setSummaries] = useState<ChatSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.resolve().then(() => setLoading(true));
    getChatSummaries(client.id)
      .then(setSummaries)
      .catch(() => setSummaries([]))
      .finally(() => setLoading(false));
  }, [client.id]);

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-[#0d0d0f] border-l border-white/5 p-5 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-medium text-white">Contact details</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={18} />
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-lg font-medium text-indigo-300">
          {client.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-white font-medium">{client.name}</p>
          <p className="text-xs text-gray-400">{client.email}</p>
        </div>
      </div>

      <div className="space-y-2 mb-6 text-sm">
        {client.company && (
          <div className="flex justify-between text-gray-400">
            <span>Company</span>
            <span className="text-gray-200">{client.company}</span>
          </div>
        )}
        {client.role && (
          <div className="flex justify-between text-gray-400">
            <span>Role</span>
            <span className="text-gray-200">{client.role}</span>
          </div>
        )}
        {client.phone && (
          <div className="flex justify-between text-gray-400">
            <span>Phone</span>
            <span className="text-gray-200">{client.phone}</span>
          </div>
        )}
        <div className="flex justify-between text-gray-400">
          <span>Status</span>
          <span className="text-gray-200 capitalize">{client.status}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {client.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-medium text-white mb-3">AI Summary</h3>
        {loading && <p className="text-xs text-gray-500">Loading...</p>}
        {!loading && summaries.length === 0 && (
          <p className="text-xs text-gray-500">No conversation history yet.</p>
        )}
        <div className="space-y-3">
          {summaries.map((s) => (
            <div
              key={s.id}
              className="p-3 rounded-lg bg-white/[0.03] border border-white/5"
            >
              <p className="text-xs text-gray-300 mb-2">{s.summary}</p>
              {s.keyPoints.length > 0 && (
                <ul className="list-disc list-inside space-y-1">
                  {s.keyPoints.map((point, i) => (
                    <li key={i} className="text-[11px] text-gray-500">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}