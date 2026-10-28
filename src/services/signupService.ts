import { api } from "./api";

import type {
  SignupRequest,
  SignupResponse,
} from "@/features/auth/types/signup.types";

export async function signup(data: SignupRequest): Promise<SignupResponse> {
  const response = await api.post("/api/user", data);

  return response.data;
}
