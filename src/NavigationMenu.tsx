import { navigationMenuData } from "./lib/NavigationMenuData";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import NavigationMenuItem from "./NavigationMenuItem";
import { useState } from "react";

export default function NavigationMenu() {
  const [activeItem, setActiveItem] = useState("");
  return (
    <RadixNavigationMenu.Root
      value={activeItem}
      onValueChange={setActiveItem}
      className="relative flex text-sm"
    >
      <RadixNavigationMenu.List className="flex list-none gap-8 rounded-md">
        {navigationMenuData.map((item) => (
          <NavigationMenuItem item={item} key={item.title} />
        ))}
      </RadixNavigationMenu.List>
    </RadixNavigationMenu.Root>
  );
}
