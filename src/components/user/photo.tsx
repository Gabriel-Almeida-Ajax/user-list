import { User } from "../../@types/user";

export type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function Img(props: ImageProps) {
  return <img loading="lazy" {...props} />;
}

export function UserImage(user: User) {
  return <Img key={user.id} src={user.image} alt={user.username} />;
}
