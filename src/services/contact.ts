import http from "./http";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export async function submitContact(payload: ContactPayload) {
  const { data } = await http.post("/contacts", payload);
  return data;
}
