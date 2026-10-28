export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  role: Role;
}
export type Role = "VIEWER" | "ORGANIZER" | "ADMIN";
