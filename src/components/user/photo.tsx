import { User } from "../../@types/user";

export type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function Img(props: ImageProps) {
  return <img {...props} />;
}

export function UserImage(user: User){
    return <Img key={user.id} src={user.image} alt={user.username} />
}

type LoopUserImageProps = {
  render: (user: User) => JSX.Element
  users?: User[]
}

export function LoopUserImage({ users = [], render }: LoopUserImageProps){
  return users.map(render)
}