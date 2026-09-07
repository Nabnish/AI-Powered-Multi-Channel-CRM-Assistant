import axiosClient from "./axiosClient";
import type { ChatMessage } from "../types/chatMessage";

export const getChatHistory = async (): Promise<ChatMessage[]> => {
  const { data } = await axiosClient.get("/chat/history");
  return data;
};

export const sendChatMessage = async (
  content: string
): Promise<ChatMessage> => {
  const { data } = await axiosClient.post("/chat/message", { content });
  return data;
};