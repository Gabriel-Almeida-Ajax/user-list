import { User } from "../../@types/user";

type LoopRenderProps = {
  render: (user: User) => JSX.Element;
  users?: User[];
};

export function UserLoopRender({ users = [], render }: LoopRenderProps) {
  return <>{users.map(render)}</>;
}
