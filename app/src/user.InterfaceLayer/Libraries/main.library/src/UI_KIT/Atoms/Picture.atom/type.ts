export interface IProps {
  width?: string;
  height?: string;
  defaultImage: string;
  alt?: string;
  images: images[];
}

type images = {
  srcset: string,
  type?: string,
  media?: string,
  width?: string;
  height?: string;
}
