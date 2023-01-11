import React, { ReactNode } from "react";
import { Menu } from "@headlessui/react";

interface IButton {
  children: ReactNode;
}

const MenuButton = ({ children }: IButton) => {
  return (
    <Menu.Button className="inline-flex justify-center rounded-md border border-neutral-400 dark:border-neutral-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-indigo-200 dark:hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all">
      {children}
    </Menu.Button>
  );
};

export default MenuButton;
