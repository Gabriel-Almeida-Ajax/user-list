import { PropsWithChildren } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

export function QueriesProvider({ children }: PropsWithChildren) {
  return <QueryClientProvider client={client} children={children} />;
}
