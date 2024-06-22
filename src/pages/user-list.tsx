import { LoopUserImage, UserImage } from "../components/user/photo";
import { GetUserList, service } from "../services/user";

export function UserList() {
  const { data } = GetUserList(service);

  return <LoopUserImage render={UserImage} users={data} />;
}
