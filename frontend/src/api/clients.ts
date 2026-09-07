import axiosClient from "./axiosClient";
import type { Client } from "../types/client";

export const getClients = async (): Promise<Client[]> => {
  const { data } = await axiosClient.get("/clients");
  return data;
};

export const getClient = async (id: string): Promise<Client> => {
  const { data } = await axiosClient.get(`/clients/${id}`);
  return data;
};

export const createClient = async (
  payload: Partial<Client>
): Promise<Client> => {
  const { data } = await axiosClient.post("/clients", payload);
  return data;
};

export const updateClient = async (
  id: string,
  payload: Partial<Client>
): Promise<Client> => {
  const { data } = await axiosClient.put(`/clients/${id}`, payload);
  return data;
};

export const deleteClient = async (id: string): Promise<void> => {
  await axiosClient.delete(`/clients/${id}`);
};