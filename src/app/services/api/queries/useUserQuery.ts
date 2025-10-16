import { useQuery } from "@tanstack/react-query";
import { api } from "../client";
import * as USER from "../endpoints/user";

export const useUserQuery = (id: string) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: () => api(USER.byId(id)),
    enabled: !!id,
  });