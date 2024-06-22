import { useFormContext } from "react-hook-form";
import { FILTERING_GET_USER_LIST } from "../../../services/user/get-user-list-filtering";
import { GetUserList, service } from "../../../services/user";
import { useUserListFilter } from "./filter";
import { IUserHook } from ".";

export function useUserList(): IUserHook {
    const filtering = useFormContext().watch(FILTERING_GET_USER_LIST);
    const { data: allData, isLoading: allLoading } = GetUserList(service);
    const { users: data, isLoading } = useUserListFilter();

    const users = filtering ? data : allData;

    return {
        users,
        isLoading: isLoading || allLoading
    }
}