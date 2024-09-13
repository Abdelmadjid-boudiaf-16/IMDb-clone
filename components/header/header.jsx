import React from "react";
import MenuItem from "./menu-item";
import { IoMdHome } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import Link from "next/link";
import DarkMode from "../ui/dark-mode";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8">
      <nav className="flex items-center gap-4">
        <MenuItem title="home" address="/" Icon={<IoMdHome />} />
      </nav>
      <div className="flex items-center space-x-4">
        <DarkMode />
        <Link href="/">
          <span className="rounded-lg bg-amber-500 p-3 text-2xl font-bold shadow-md">
            IMDb
          </span>
        </Link>
        <span className="hidden text-xl font-semibold sm:inline">Clone</span>
      </div>
    </header>
  );
};

export default Header;
