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
            active ? "bg-indigo-400 transition-all text-gray-100" : "",
            "block p-4 text-3xl rounded-xl",
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
};

export default DropdownMenuItem;
