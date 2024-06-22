import { User } from "../../@types/user";

type LoopRenderProps = {
  render: (user: User) => JSX.Element;
  users?: User[];
};

export function LoopRender({ users = [], render }: LoopRenderProps) {
  return <>{users.map(render)}</>;
}
