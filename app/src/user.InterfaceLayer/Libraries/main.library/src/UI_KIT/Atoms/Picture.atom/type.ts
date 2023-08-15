import { FormatImages } from "./enum";

type sources = {
  srcset: string,
  type?: FormatImages | undefined,
  media?: string | undefined,
  width?: string,
  height?: string,
}

export interface IProps {
  sources: sources[];
  defaultImage: string;
  width?: string;
  height?: string;
  alt?: string;
  radius: string
}
