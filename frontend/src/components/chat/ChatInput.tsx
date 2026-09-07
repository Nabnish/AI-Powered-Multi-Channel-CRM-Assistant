import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

interface Props {
  onSend: (content: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5"
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask anything about your network..."
        disabled={disabled}
        className="flex-1 bg-transparent text-sm text-gray-100 placeholder:text-gray-500 outline-none"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="text-indigo-400 disabled:text-gray-600 hover:text-indigo-300 transition-colors"
      >
        <Send size={16} />
      </button>
    </form>
  );
}