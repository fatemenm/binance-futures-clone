import type { NavigationMenuItem } from "./lib/Definitions";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowRight, CaretDown, CaretRight, CaretUp } from "phosphor-react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useState } from "react";

export default function NavigationMenuItem({
  item,
}: {
  item: NavigationMenuItem;
}) {
  const [activeSubItem, setActiveSubItem] = useState("");
  return (
    <RadixNavigationMenu.Item
      className="hover: relative font-medium text-gray-800"
      value={item.title}
    >
      {item.type === "link" && item.url && (
        <RadixNavigationMenu.Link
          href={item.url}
          className="flex items-center gap-1 hover:text-yellow-600"
        >
          {item.title}
        </RadixNavigationMenu.Link>
      )}
      {item.type === "submenu" && item.items && item.items.length > 0 && (
        <>
          <RadixNavigationMenu.Trigger className="group flex items-center gap-1 hover:text-yellow-600">
            {item.title}
            <CaretDown
              aria-hidden
              className="h-3 w-3 group-hover:hidden"
              weight="bold"
            />
            <CaretUp
              aria-hidden
              className="hidden h-3 w-3 group-hover:block"
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
                            weight="bold"
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
                                          {subSubItem.icon?.src ? (
                                            <img
                                              src={subSubItem.icon?.src}
                                              alt={subSubItem.title + " icon"}
                                              className="h-6 w-6"
                                            />
                                          ) : null}
                                          {subSubItem.title}
                                        </span>
                                        <span className="opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                                          <ArrowRight
                                            aria-hidden
                                            className="h-3 w-3 text-yellow-500"
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
          <RadixNavigationMenu.Trigger className="group flex items-center gap-1 hover:text-yellow-600">
            {item.title}
            <CaretDown
              aria-hidden
              className="h-3 w-3 group-hover:hidden"
              weight="bold"
            />
            <CaretUp
              aria-hidden
              className="hidden h-3 w-3 group-hover:block"
              weight="bold"
            />
          </RadixNavigationMenu.Trigger>
          <RadixNavigationMenu.Content className="absolute top-full left-0 mt-4 w-fit rounded-md bg-white p-4 shadow-md">
            <div className="flex justify-between gap-10 p-2">
              {item.items?.map((subItem) => {
                return (
                  <div className="flex flex-col gap-3" key={subItem.title}>
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
                              className="group flex flex-col gap-1 text-xs"
                            >
                              <h4 className="flex items-center gap-3 text-sm font-medium text-nowrap">
                                {subSubItem.title}
                                <span className="opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                                  <ArrowRight
                                    aria-hidden
                                    className="h-3 w-3 text-yellow-500"
                                    weight="bold"
                                  />
                                </span>
                              </h4>
                              <span className="font-normal text-gray-500">
                                {subSubItem.explanation}
                              </span>
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
}
