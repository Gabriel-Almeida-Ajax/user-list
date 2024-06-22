import { Input } from "../ui/input";
import debounce from "debounce";
import { useUserListFilter } from "./hook/filter";

export function UserFilter() {
  const { register, onChange } = useUserListFilter();

  return (
    <Input
      className="w-96"
      placeholder="Pesquise pelo nome..."
      {...register}
      onChange={debounce(onChange, 500)}
    />
  );
}
