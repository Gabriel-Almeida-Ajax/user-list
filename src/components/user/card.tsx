import { User } from "../../@types/user";
import { UserImage } from "./photo";

export function UserCard(user: User) {
  return (
    <div className="flex flex-col justify-center items-center w-42 h-60 border hover:bg-neutral-100 hover:cursor-pointer hover:scale-110 transition-all">
      <UserImage {...user} />
      <p>{user.firstName}</p>
    </div>
  );
}
