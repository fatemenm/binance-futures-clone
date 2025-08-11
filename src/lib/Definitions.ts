export interface NavigationMenuItem {
  type?: "link" | "submenu" | "custom";
  title: string;
  url?: string;
  items?: Array<NavigationMenuItem>;
  icon?: {
    src: string;
  };
  explanation?: string;
}
