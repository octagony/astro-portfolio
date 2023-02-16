import { Menu } from "@headlessui/react";
import React, { ReactNode } from "react";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

interface IMenu {
  href: string;
  children: ReactNode;
}

const DropdownMenuItem = ({ href, children }: IMenu) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? "bg-indigo-200 dark:bg-pink-900 transition-all" : "",
            "block px-4 py-2 text-3xl rounded-xl"
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
};

export default DropdownMenuItem;
