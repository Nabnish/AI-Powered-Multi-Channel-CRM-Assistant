import type { Client } from "../../types/client";

const statusColor: Record<Client["status"], string> = {
  active: "bg-emerald-500/15 text-emerald-400",
  inactive: "bg-gray-500/15 text-gray-400",
  prospect: "bg-amber-500/15 text-amber-400",
};

interface Props {
  client: Client;
  onClick?: (client: Client) => void;
}

export default function ClientCard({ client, onClick }: Props) {
  return (
    <div
      onClick={() => onClick?.(client)}
      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 cursor-pointer transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-indigo-500/20 flex items-center justify-center text-sm font-medium text-indigo-300">
          {client.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{client.name}</p>
          <p className="text-xs text-gray-400">
            {client.role ? `${client.role} · ` : ""}
            {client.company ?? client.email}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {client.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-gray-300"
          >
            {tag}
          </span>
        ))}
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full capitalize ${
            statusColor[client.status]
          }`}
        >
          {client.status}
        </span>
      </div>
    </div>
  );
}