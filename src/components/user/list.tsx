import { useFormContext } from "react-hook-form";
import { UserLoopRender } from "./loop-render";
import { UserCard } from "./card";
import { GetUserList, GetUserListFiltering, service } from "../../services/user";
import { FILTERING_GET_USER_LIST } from "../../services/user/get-user-list-filtering";

export function UserList() {
  const filtering = useFormContext().watch(FILTERING_GET_USER_LIST);
  const { data: allData, isLoading: allLoading } = GetUserList(service);
  const { data, isLoading } = GetUserListFiltering(service);

  if (isLoading || allLoading) return <p>Carregando conteúdo...</p>;

  const marginTop = "72px";

  const users = filtering ? data : allData;

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
