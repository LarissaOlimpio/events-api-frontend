import { api } from "./api";

import type {
  LoginRequest,
  LoginResponse,
} from "@/features/auth/types/auth.types";

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await api.post("/api/auth/login", data);

  return response.data;
}
