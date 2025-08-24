import { apiUrl } from "~/utils/constant";

const fetcher = {
  get: async (endpoint: string) => {
    const res = await fetch(`${apiUrl}${endpoint}`);
    if (!res.ok) throw new Error(`GET ${endpoint} failed`);
    return res.json();
  },

  post: async (endpoint: string, data: any) => {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`POST ${endpoint} failed`);
    return res.json();
  },

  patch: async (endpoint: string, data: any) => {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`PATCH ${endpoint} failed`);
    return res.json();
  },

  delete: async (endpoint: string) => {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`DELETE ${endpoint} failed`);
    return res.json();
  },

  put: async (endpoint: string, data: any) => {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`PUT ${endpoint} failed`);
    return res.json();
  },

  // Add other methods like PUT, DELETE as needed
};

export default fetcher;
