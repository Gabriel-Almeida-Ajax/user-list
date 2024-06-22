import { User, UserHttpResponse } from "../../@types/user";
import { httpClient } from "../httpClient";
import { IUserByIdService } from "./get-user-by-id";
import { IUserListService } from "./get-user-list";

export class UserService implements IUserByIdService, IUserListService {
    async getUserById(id: number): Promise<User> {
        const { data } = await httpClient.get<User>(`/users/${id}`);
        return data;
    }
    async getUserList(): Promise<User[]> {
        const { data } = await httpClient.get<UserHttpResponse>("/users");
        return data.users;
    }
}

export { GetUserList } from "./get-user-list";
export { GetUserById } from "./get-user-by-id";

export const service = new UserService();