import { Format } from "./enum";

type source = {
  srcset: string,
  type?: Format | never,
  media?: string | never,
  width?: string | never,
  height?: string | never,
}

export interface IProps {
  source: source[];
  defaultImage: string;
  width?: string;
  height?: string;
  alt?: string;
  isLoading?: boolean;
}
