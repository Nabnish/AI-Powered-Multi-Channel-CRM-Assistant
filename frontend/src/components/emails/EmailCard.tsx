import type { Email } from "../../types/email";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const statusColor: Record<Email["status"], string> = {
  sent: "bg-blue-500/15 text-blue-400",
  received: "bg-emerald-500/15 text-emerald-400",
  draft: "bg-gray-500/15 text-gray-400",
  scheduled: "bg-amber-500/15 text-amber-400",
};

interface Props {
  email: Email;
  onClick?: (email: Email) => void;
}

export default function EmailCard({ email, onClick }: Props) {
  const Icon = email.direction === "inbound" ? ArrowDownLeft : ArrowUpRight;

  return (
    <div
      onClick={() => onClick?.(email)}
      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 cursor-pointer transition-colors"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
            email.direction === "inbound"
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-indigo-500/15 text-indigo-400"
          }`}
        >
          <Icon size={14} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">
            {email.subject}
          </p>
          <p className="text-xs text-gray-400 truncate">
            {email.clientName} · {email.snippet}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {email.intent && (
          <span className="text-[11px] text-gray-500">{email.intent}</span>
        )}
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full capitalize ${
            statusColor[email.status]
          }`}
        >
          {email.status}
        </span>
      </div>
    </div>
  );
}
