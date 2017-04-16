export interface MenuItem {
  name: string;
  title: string;
  url?: string;
  icon?: string;
  children?: Array<MenuItem>;
  selected?: boolean;
}