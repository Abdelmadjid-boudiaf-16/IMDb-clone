"use client";
import React from "react";
import NavBarItem from "./nav-bar-item";

const genres = ["All", "Action", "Comedy", "Crime", "Horror", "Family"];

const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-center bg-amber-100 px-4 py-8 dark:bg-slate-600">
      <ul className="flex items-center justify-around gap-2 overflow-y-hidden overflow-x-scroll sm:overflow-hidden ">
        {genres.map((genre) => (
          <NavBarItem key={genre} param={genre} title={genre} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
