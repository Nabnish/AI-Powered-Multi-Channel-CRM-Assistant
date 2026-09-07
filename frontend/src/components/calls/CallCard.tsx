import type { Call } from "../../types/call";
import { PhoneIncoming, PhoneOutgoing, PhoneMissed, Voicemail } from "lucide-react";

const statusColor: Record<Call["status"], string> = {
  completed: "bg-emerald-500/15 text-emerald-400",
  missed: "bg-red-500/15 text-red-400",
  scheduled: "bg-amber-500/15 text-amber-400",
  voicemail: "bg-purple-500/15 text-purple-400",
};

function formatDuration(seconds?: number) {
  if (!seconds) return "—";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function CallIcon({ call }: { call: Call }) {
  if (call.status === "missed") return <PhoneMissed size={14} />;
  if (call.status === "voicemail") return <Voicemail size={14} />;
  return call.direction === "inbound" ? (
    <PhoneIncoming size={14} />
  ) : (
    <PhoneOutgoing size={14} />
  );
}

interface Props {
  call: Call;
  onClick?: (call: Call) => void;
}

export default function CallCard({ call, onClick }: Props) {
  return (
    <div
      onClick={() => onClick?.(call)}
      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 cursor-pointer transition-colors"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
            statusColor[call.status]
          }`}
        >
          <CallIcon call={call} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">
            {call.clientName}
          </p>
          <p className="text-xs text-gray-400 truncate">
            {call.summary ?? "No summary available"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span className="text-[11px] text-gray-500">
          {formatDuration(call.durationSeconds)}
        </span>
        {call.transcriptAvailable && (
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-gray-300">
            Transcript
          </span>
        )}
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full capitalize ${
            statusColor[call.status]
          }`}
        >
          {call.status}
        </span>
      </div>
    </div>
  );
}