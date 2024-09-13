"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
const SearchMovies = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchResult = search;
    setSearch("");
    router.push(`/search/${searchResult}`);
  };

  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="relative flex w-full items-center"
      >
        <input
          type="search"
          placeholder="search a movie..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="w-full rounded-full bg-slate-800/10 px-8 py-4 text-amber-500 outline-none transition-all duration-500 placeholder:text-slate-800 focus:ring-amber-600 focus-visible:ring focus-visible:ring-offset-0 dark:bg-slate-100/5 dark:placeholder:text-slate-100"
        />
        <button
          className="absolute disabled:cursor-not-allowed right-0 flex -translate-x-2 items-center space-x-2 rounded-full bg-slate-800 px-4 py-2 text-xl font-semibold text-slate-100 dark:bg-slate-100 dark:text-slate-800"
          type="submit"
          disabled={search === ""}
        >
          <IoSearch /> <span className="hidden md:inline">Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
