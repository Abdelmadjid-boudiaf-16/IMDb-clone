"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
  const path = usePathname();
  return (
    <div className="">
      <Link
        href={address}
        className={`hover:text-amber-500 ${path === address ? "text-amber-500" : ""} transition-colors duration-500`}
      >
        <span className="text-3xl sm:hidden">{Icon}</span>
        <p className="text-md hidden font-bold uppercase sm:inline">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
