import { UserLoopRender } from "./loop-render";
import { UserCard } from "./card";
import { useUserList } from "./hook/list";

export function UserList() {
  const { users, isLoading } = useUserList();
  const marginTop = "72px";

  if (isLoading) return <p>Carregando conteúdo...</p>;

  return (
    <div
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-5"
      style={{
        marginTop
      }}
    >
      <UserLoopRender render={UserCard} users={users} />
    </div>
  );
}
