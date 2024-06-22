import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";

export function FormsProvider({ children }: PropsWithChildren) {
  const form = useForm();
  return <FormProvider {...form}>{children}</FormProvider>;
}
