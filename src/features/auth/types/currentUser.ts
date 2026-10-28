export interface CurrentUser {
  id: number;
  name: string;
  email: string;
  role: Role;
}
export type Role = "VIEWER" | "ORGANIZER" | "ADMIN";
