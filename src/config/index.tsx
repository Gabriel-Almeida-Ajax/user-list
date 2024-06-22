import { PropsWithChildren } from "react";
import { QueriesProvider } from "./react-query";
import { FormsProvider } from "./react-hook-form";

export function Providers({ children }: PropsWithChildren) {
  return <FormsProvider children={<QueriesProvider children={children} />} />;
}
