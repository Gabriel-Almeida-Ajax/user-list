import { PropsWithChildren } from "react";
import { QueriesProvider } from "./react-query";

export function Providers({ children }: PropsWithChildren) {
  return <QueriesProvider children={children} />;
}
