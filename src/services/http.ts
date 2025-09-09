import axios, { AxiosInstance } from "axios";

const baseURL = process.env.VUE_APP_API_BASE_URL || "";

const httpClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use((config) => {
  // Aquí se podrían inyectar tokens, etc.
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores centralizado
    return Promise.reject(error);
  }
);

export default httpClient;
