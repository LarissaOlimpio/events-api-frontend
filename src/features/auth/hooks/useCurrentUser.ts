import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "@/services/authService";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["me"],
    queryFn: getCurrentUser,
    retry: false,
  });
}
