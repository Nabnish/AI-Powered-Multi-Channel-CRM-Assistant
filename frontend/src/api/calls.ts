import axiosClient from "./axiosClient";
import type { Call } from "../types/call";

export const getCalls = async (clientId?: string): Promise<Call[]> => {
  const { data } = await axiosClient.get("/calls", {
    params: clientId ? { clientId } : undefined,
  });
  return data;
};

export const getCall = async (id: string): Promise<Call> => {
  const { data } = await axiosClient.get(`/calls/${id}`);
  return data;
};

export const logCall = async (payload: Partial<Call>): Promise<Call> => {
  const { data } = await axiosClient.post("/calls", payload);
  return data;
};