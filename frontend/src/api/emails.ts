import axiosClient from "./axiosClient";
import type { Email } from "../types/email";

export const getEmails = async (clientId?: string): Promise<Email[]> => {
  const { data } = await axiosClient.get("/emails", {
    params: clientId ? { clientId } : undefined,
  });
  return data;
};

export const getEmail = async (id: string): Promise<Email> => {
  const { data } = await axiosClient.get(`/emails/${id}`);
  return data;
};

export const sendEmail = async (payload: {
  clientId: string;
  subject: string;
  body: string;
}): Promise<Email> => {
  const { data } = await axiosClient.post("/emails", payload);
  return data;
};
