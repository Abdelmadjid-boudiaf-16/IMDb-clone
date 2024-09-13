"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavBarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div
      className={`w-fit rounded-xl p-3 text-xl font-semibold transition-colors duration-500 hover:text-amber-600 ${
        genre === param
          ? "bg-slate-600/5 text-amber-600 underline decoration-amber-600 decoration-4 underline-offset-8 dark:bg-amber-100/5"
          : ""
      } `}
    >
      <Link href={`/?genre=${param}`} className="px-4 py-2">
        {title}
      </Link>
    </div>
  );
};

export default NavBarItem;
