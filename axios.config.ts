import axios, { AxiosInstance } from "axios";

export const cakejolts: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default cakejolts;
