import type { ChatMessage } from "../../types/chatMessage";

export default function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
          isUser
            ? "bg-indigo-500 text-white rounded-br-sm"
            : "bg-white/[0.05] text-gray-200 rounded-bl-sm border border-white/5"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}