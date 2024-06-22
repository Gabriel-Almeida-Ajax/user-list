import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { FILTERING_GET_USER_LIST } from "../../services/user/get-user-list-filtering";
import debounce from "debounce";

export function UserFilter() {
  const form = useFormContext();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue(FILTERING_GET_USER_LIST, e.target.value);
  };

  const register = form.register(FILTERING_GET_USER_LIST);

  return (
    <Input
      className="w-96"
      placeholder="Pesquise pelo nome..."
      {...register}
      onChange={debounce(onChange, 500)}
    />
  );
}
