import http from "./http";

export interface CvPayload {
  name: string;
  email: string;
  file: File;
}

export async function uploadCV(payload: CvPayload) {
  const form = new FormData();
  form.append("name", payload.name);
  form.append("email", payload.email);
  form.append("cv", payload.file);
  const { data } = await http.post("/cvs", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
}
