import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { IoMenu } from "react-icons/io5";
import { HOMEPAGE_URL } from "../config";
import DropdownMenuItem from "./DropdownMenuItem";

const DropdownMenu = () => {
  return (
    <Menu as="div" className="inlline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-orange-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
          aria-label="menu"
        >
          <IoMenu className="h-5 w-5" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transforom opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-0 left-0 h-full w-full">
          <div className="py-1">
            <div className="px-3 py-2 uppercase font-bold text-xs flex flex-col h-screen items-center justify-center gap-12">
              <DropdownMenuItem href="/about">About me</DropdownMenuItem>
              <DropdownMenuItem href="/projects">Projects</DropdownMenuItem>
              <DropdownMenuItem href="/contacts">Contacts</DropdownMenuItem>
              <DropdownMenuItem href={HOMEPAGE_URL}>GitHub</DropdownMenuItem>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
