import { api } from "./api";

import type {
  LoginRequest,
  LoginResponse,
} from "@/features/auth/types/auth.types";
import type { CurrentUser } from "@/features/auth/types/currentUser";

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await api.post("/api/auth/login", data);

  return response.data;
}
export async function getCurrentUser() {
  const response = await api.get<CurrentUser>("/api/auth/me");

  return response.data;
}
