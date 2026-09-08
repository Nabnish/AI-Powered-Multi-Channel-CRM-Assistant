import axiosClient from "./axiosClient";
import type { Lead } from "../types/lead";

export const getLeads = async (): Promise<Lead[]> => {
  const { data } = await axiosClient.get("/leads");
  return data;
};

export const getLead = async (id: string): Promise<Lead> => {
  const { data } = await axiosClient.get(`/leads/${id}`);
  return data;
};

export const createLead = async (payload: Partial<Lead>): Promise<Lead> => {
  const { data } = await axiosClient.post("/leads", payload);
  return data;
};

export const updateLead = async (
  id: string,
  payload: Partial<Lead>
): Promise<Lead> => {
  const { data } = await axiosClient.put(`/leads/${id}`, payload);
  return data;
};

export const deleteLead = async (id: string): Promise<void> => {
  await axiosClient.delete(`/leads/${id}`);
};