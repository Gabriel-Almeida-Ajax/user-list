import { useQuery } from "react-query";
import { User } from "../../@types/user";
import { useFormContext } from "react-hook-form";

export interface IUserListFilterService {
    getUserListFiltering: (query?: string) => Promise<User[]>;
}

export const FILTERING_GET_USER_LIST = "FILTERING_GET_USER_LIST";

export function GetUserListFiltering(service: IUserListFilterService) {
    const filtering = useFormContext().watch(FILTERING_GET_USER_LIST);
    const getUserListFiltering = filtering ? async () => await service.getUserListFiltering(filtering) : () => []
    return useQuery<User[], Error>(["get-user-list", filtering], getUserListFiltering)
}