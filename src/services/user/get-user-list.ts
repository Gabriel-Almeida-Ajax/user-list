import { useQuery } from "react-query";
import { User } from "../../@types/user";

export interface IUserListService {
    getUserList: () => Promise<User[]>;
}

export function GetUserList(service: IUserListService) {
    return useQuery<User[], Error>(["get-user-list"], service.getUserList)
}