import { UserCard } from "../components/user/card";
import { UserListFilter } from "../components/user/filter";
import { UserLoopRender } from "../components/user/loop-render";
import { GetUserList, service } from "../services/user";

export function UserList() {
  const { data, isLoading } = GetUserList(service);

  if (isLoading) return <p>Carregando conteúdo...</p>;

  const marginTop = "72px";

  return (
    <div className="w-full h-full overflow-auto">
      <div className="fixed top-0 z-50 flex justify-center py-4 w-full h-fit bg-neutral-50">
        <UserListFilter />
      </div>
      <div
        className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 p-5"
        style={{
          marginTop
        }}
      >
        <UserLoopRender render={UserCard} users={data} />
      </div>
    </div>
  );
}
