import { User } from "../../../@types/user";

interface IUserHook {
    users?: User[];
    isLoading: boolean;
}