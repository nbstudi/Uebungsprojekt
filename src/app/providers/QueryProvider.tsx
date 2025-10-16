import React, { PropsWithChildren } from "react";
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";
import { AppState } from "react-native";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 1000 * 60 * 5,
    },
  },
});

// App-Lifecycle → Online/Offline handling für React Query
AppState.addEventListener("change", (status) => {
  focusManager.setFocused(status === "active");
});

export function QueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}