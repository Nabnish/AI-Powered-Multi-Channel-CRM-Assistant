import type { Lead } from "../../types/lead";

const statusColor: Record<Lead["status"], string> = {
  new: "bg-blue-500/15 text-blue-400",
  contacted: "bg-amber-500/15 text-amber-400",
  qualified: "bg-purple-500/15 text-purple-400",
  converted: "bg-emerald-500/15 text-emerald-400",
  lost: "bg-gray-500/15 text-gray-400",
};

function scoreColor(score: number) {
  if (score >= 75) return "text-emerald-400 bg-emerald-500/15";
  if (score >= 40) return "text-amber-400 bg-amber-500/15";
  return "text-red-400 bg-red-500/15";
}

interface Props {
  lead: Lead;
  onClick?: (lead: Lead) => void;
}

export default function LeadCard({ lead, onClick }: Props) {
  return (
    <div
      onClick={() => onClick?.(lead)}
      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 cursor-pointer transition-colors"
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ${scoreColor(
            lead.score
          )}`}
        >
          {lead.score}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{lead.name}</p>
          <p className="text-xs text-gray-400">
            {lead.company ?? lead.email}
            {lead.source ? ` · via ${lead.source}` : ""}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {lead.nextBestAction && (
          <span className="text-[11px] text-gray-500 max-w-[140px] truncate">
            {lead.nextBestAction}
          </span>
        )}
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full capitalize ${
            statusColor[lead.status]
          }`}
        >
          {lead.status}
        </span>
      </div>
    </div>
  );
}