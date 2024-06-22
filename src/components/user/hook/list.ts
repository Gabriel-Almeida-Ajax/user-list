import { useFormContext } from "react-hook-form";
import { FILTERING_GET_USER_LIST, GetUserListFiltering } from "../../../services/user/get-user-list-filtering";
import { GetUserList, service } from "../../../services/user";

export function useUserList() {
    const filtering = useFormContext().watch(FILTERING_GET_USER_LIST);
    const { data: allData, isLoading: allLoading } = GetUserList(service);
    const { data, isLoading } = GetUserListFiltering(service);

    const users = filtering ? data : allData;

    return {
        users,
        isLoading: isLoading || allLoading
    }
}