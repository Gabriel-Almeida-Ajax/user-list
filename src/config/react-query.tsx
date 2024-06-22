import { PropsWithChildren } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      refetchIntervalInBackground: false
    }
  }
});

export function QueriesProvider({ children }: PropsWithChildren) {
  return <QueryClientProvider client={client} children={children} />;
}
