import axiosClient from "./axiosClient";
import type { ChatSummary } from "../types/chat";

export const getChatSummaries = async (
  clientId: string
): Promise<ChatSummary[]> => {
  const { data } = await axiosClient.get(`/chat/summaries/${clientId}`);
  return data;
};