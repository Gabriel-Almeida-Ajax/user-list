import { UserCard } from "../components/user/card";
import { LoopRender } from "../components/user/loop-render";
import { GetUserList, service } from "../services/user";

export function UserList() {
  const { data, isLoading } = GetUserList(service);

  if (isLoading) return <p>Carregando conteúdo...</p>;

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 p-5">
      <LoopRender render={UserCard} users={data} />
    </div>
  );
}
