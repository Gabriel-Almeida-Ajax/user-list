import { FILTERING_GET_USER_LIST, GetUserListFiltering } from "../../../services/user/get-user-list-filtering";
import { service } from "../../../services/user";
import { IUserHook } from ".";
import { UseFormRegisterReturn, useFormContext } from "react-hook-form";

interface IUserFiltering {
    register: UseFormRegisterReturn;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function useUserListFilter(): IUserHook & IUserFiltering{
    const form = useFormContext();
    const { data: users, isLoading } = GetUserListFiltering(service);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      form.setValue(FILTERING_GET_USER_LIST, e.target.value);
    };
  
    const register = form.register(FILTERING_GET_USER_LIST);

    return {
        users,
        isLoading,

        register,
        onChange
    }
}