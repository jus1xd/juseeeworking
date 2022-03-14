export interface ISiteConfig {
  _id: string;
  siteLogo: string;
  colors: Record<string, string>;
  tof: Record<string, string>;
  help: Record<string, string>;
  categories: string[];
}
