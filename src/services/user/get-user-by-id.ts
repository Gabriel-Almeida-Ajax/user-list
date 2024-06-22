import { useQuery } from "react-query";
import { User } from "../../@types/user";

export interface IUserByIdService {
    getUserById: (userId: number) => Promise<User>;
}

export function GetUserById(service: IUserByIdService, userId: number) {
    const getUserById = async () => await service.getUserById(userId)
    return useQuery<User, Error>(["get-user-list"], getUserById)
}