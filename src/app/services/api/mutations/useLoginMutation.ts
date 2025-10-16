import { useMutation } from "@tanstack/react-query";
import { api } from "../client";
import * as AUTH from "../endpoints/auth";

interface LoginInput {
  email: string;
  password: string;
}
interface LoginResponse {
  token: string;
}

export const useLoginMutation = () =>
  useMutation({
    mutationFn: (data: LoginInput) => api<LoginResponse>(AUTH.login, "POST", { body: data }),
  });