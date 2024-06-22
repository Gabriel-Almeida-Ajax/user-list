import { LoopUserImage, UserImage } from "../components/user/photo";
import { GetUserList, service } from "../services/user";

export function UserList() {
  const { data, isLoading } = GetUserList(service);

  if (isLoading) return <p>Carregando conteúdo...</p>;

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
      <LoopUserImage render={UserImage} users={data} />
    </div>
  );
}
