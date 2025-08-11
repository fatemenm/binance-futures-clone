import { navigationMenuData } from "./lib/NavigationMenuData";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { ArrowRight, CaretDown, CaretRight } from "phosphor-react";
import { useState } from "react";

export default function NavigationMenu() {
  const [activeItem, setActiveItem] = useState("");
  const [activeSubItem, setActiveSubItem] = useState("");
  return (
    <RadixNavigationMenu.Root
      value={activeItem}
      onValueChange={setActiveItem}
      className="relative flex text-sm"
    >
      <RadixNavigationMenu.List className="flex list-none gap-8 rounded-md">
        {navigationMenuData.map((item) => {
          return (
            <RadixNavigationMenu.Item
              className="relative"
              key={item.title}
              value={item.title}
            >
              {item.type === "link" && item.url && (
                <RadixNavigationMenu.Link
                  href={item.url}
                  className="flex items-center gap-1"
                >
                  {item.title}
                </RadixNavigationMenu.Link>
              )}
              {item.type === "submenu" &&
                item.items &&
                item.items.length > 0 && (
                  <>
                    <RadixNavigationMenu.Trigger className="flex items-center gap-1">
                      {item.title}
                      <CaretDown
                        aria-hidden
                        className="gray-600 h-3 w-3"
                        weight="bold"
                      />
                    </RadixNavigationMenu.Trigger>
                    <RadixNavigationMenu.Content className="absolute top-full left-0 mt-4 w-fit rounded-md bg-white p-4 shadow-md">
                      {item.items && item.items.length > 0 && (
                        <RadixNavigationMenu.Sub
                          value={activeSubItem}
                          onValueChange={setActiveSubItem}
                          defaultValue="USDT Perpetual"
                          className="flex w-fit gap-4 bg-white"
                        >
                          <RadixNavigationMenu.List className="flex w-44 flex-col gap-2">
                            {item.items.map((subItem) =>
                              subItem.url ? (
                                <RadixNavigationMenu.Item
                                  key={subItem.title}
                                  value={subItem.title}
                                  onPointerEnter={() => setActiveSubItem("")}
                                  className="rounded-md p-3 hover:bg-gray-50"
                                >
                                  <RadixNavigationMenu.Link href={subItem.url}>
                                    {subItem.title}
                                  </RadixNavigationMenu.Link>
                                </RadixNavigationMenu.Item>
                              ) : (
                                <RadixNavigationMenu.Item
                                  key={subItem.title}
                                  className="p-3 hover:rounded-md hover:bg-gray-50"
                                >
                                  <RadixNavigationMenu.Trigger className="flex w-full items-center justify-between">
                                    {subItem.title}
                                    <CaretRight
                                      className="h-3 w-3"
                                      aria-hidden
                                    />
                                  </RadixNavigationMenu.Trigger>
                                  <RadixNavigationMenu.Content className="left-0 flex bg-white">
                                    <ScrollArea.Root
                                      className="h-96 w-auto"
                                      type="always"
                                    >
                                      <ScrollArea.Viewport className="h-full w-full rounded-md bg-gray-50">
                                        <ul className="list-none rounded-md bg-gray-50">
                                          {subItem.items?.map((subSubItem) => {
                                            return (
                                              <RadixNavigationMenu.Item
                                                key={subSubItem.title}
                                                className="w-52"
                                              >
                                                <RadixNavigationMenu.Link
                                                  href={subSubItem.url}
                                                  className="group flex w-full items-center justify-between px-4 py-3"
                                                >
                                                  <span className="flex items-center gap-4">
                                                    {subItem.icon?.src ? (
                                                      <img
                                                        src={
                                                          subSubItem.icon?.src
                                                        }
                                                        alt=""
                                                        className="h-6 w-6"
                                                      />
                                                    ) : null}
                                                    {subSubItem.title}
                                                  </span>
                                                  <span className="opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                                                    <ArrowRight
                                                      aria-hidden
                                                      className="h-3 w-3 text-amber-500"
                                                      weight="bold"
                                                    />
                                                  </span>
                                                </RadixNavigationMenu.Link>
                                              </RadixNavigationMenu.Item>
                                            );
                                          })}
                                        </ul>
                                      </ScrollArea.Viewport>
                                      <ScrollArea.Scrollbar
                                        orientation="vertical"
                                        className="flex w-1 touch-none select-none"
                                      >
                                        <ScrollArea.Thumb className="flex-1 rounded-md bg-gray-400" />
                                      </ScrollArea.Scrollbar>
                                    </ScrollArea.Root>
                                  </RadixNavigationMenu.Content>
                                </RadixNavigationMenu.Item>
                              ),
                            )}
                          </RadixNavigationMenu.List>
                          <RadixNavigationMenu.Viewport />
                        </RadixNavigationMenu.Sub>
                      )}
                    </RadixNavigationMenu.Content>
                  </>
                )}
              {item.type === "custom" && (
                <>
                  <RadixNavigationMenu.Trigger className="flex items-center gap-1">
                    {item.title}
                    <CaretDown
                      aria-hidden
                      className="gray-600 h-3 w-3"
                      weight="bold"
                    />
                  </RadixNavigationMenu.Trigger>
                  <RadixNavigationMenu.Content className="absolute top-full left-0 mt-4 w-fit rounded-md bg-white p-4 shadow-md">
                    <div className="flex justify-between gap-10 p-2">
                      {item.items?.map((subItem) => {
                        return (
                          <div className="flex flex-col gap-3">
                            <h3 className="font-semibold tracking-wide text-nowrap text-gray-400">
                              {subItem.title}
                            </h3>
                            <ul>
                              {subItem.items?.map((subSubItem) => {
                                return (
                                  <RadixNavigationMenu.Item
                                    key={subSubItem.title}
                                    className="flex w-64 gap-2 py-3"
                                  >
                                    <img
                                      src={subSubItem.icon?.src}
                                      alt=""
                                      className="h-6 w-6"
                                    />
                                    <RadixNavigationMenu.Link
                                      href={subSubItem.url}
                                      className="group flex flex-col gap-1 text-xs text-gray-500"
                                    >
                                      <h4 className="flex items-center gap-3 text-sm font-medium text-nowrap text-gray-700">
                                        {subSubItem.title}
                                        <span className="opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                                          <ArrowRight
                                            aria-hidden
                                            className="h-3 w-3 text-amber-500"
                                            weight="bold"
                                          />
                                        </span>
                                      </h4>
                                      {subSubItem.explanation}
                                    </RadixNavigationMenu.Link>
                                  </RadixNavigationMenu.Item>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </RadixNavigationMenu.Content>
                </>
              )}
            </RadixNavigationMenu.Item>
          );
        })}
      </RadixNavigationMenu.List>
    </RadixNavigationMenu.Root>
  );
}
