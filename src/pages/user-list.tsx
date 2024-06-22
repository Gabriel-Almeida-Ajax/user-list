import { UserFilter } from "../components/user/filter";
import { UserList } from "../components/user/list";

export function UserListPage() {
  return (
    <div className="w-full h-full">
      <div className="fixed top-0 z-50 flex justify-center py-4 w-full h-fit bg-neutral-50">
        <UserFilter />
      </div>
      <UserList />
    </div>
  );
}
