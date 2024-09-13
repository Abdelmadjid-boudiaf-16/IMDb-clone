"use client";
import Link from "next/link";

const LinkButton = ({ link, children, onClick }) => {
  if (!link && onClick)
    return (
      <div className="w-fit rounded-full border-none bg-slate-800 px-4 py-2 font-bold text-slate-100 underline decoration-amber-500 underline-offset-8 outline-none transition-all duration-500 hover:ring-2 hover:ring-amber-600 hover:ring-offset-0 dark:bg-slate-100 dark:text-slate-800">
        <button onClick={onClick} className="px-2 py-1 capitalize">
          {children}
        </button>
      </div>
    );
  return (
    <div className="w-fit rounded-full border-none bg-slate-800 px-4 py-2 font-bold text-slate-100 underline decoration-amber-500 underline-offset-8 outline-none transition-all duration-500 hover:ring-2 hover:ring-amber-600 hover:ring-offset-0 dark:bg-slate-100 dark:text-slate-800">
      <Link href={link} className="px-2 py-1 capitalize">
        {children}
      </Link>
    </div>
  );
};

export default LinkButton;
