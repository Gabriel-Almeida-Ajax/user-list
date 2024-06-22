import { Badge } from "antd";
import { User } from "../../@types/user";
import { UserImage } from "./photo";

export function UserCard(user: User) {
  return (
    <div className="hover:scale-110 transition-all">
      <Badge.Ribbon text={user.company.title} color={user.eyeColor}>
        <div className="flex flex-col justify-center items-center w-42 h-60 hover:bg-neutral-100 hover:cursor-pointer">
          <UserImage {...user} />
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p className="font-bold">@{user.username}</p>
        </div>
      </Badge.Ribbon>
    </div>
  );
}
