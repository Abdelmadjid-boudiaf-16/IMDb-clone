"use client";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="">
      {currentTheme === "dark" ? (
        <div className="group flex h-14 w-14 items-center justify-center rounded-full bg-slate-50/10">
          <MdLightMode
            onClick={() => setTheme("light")}
            className="h-full w-full cursor-pointer p-3 text-2xl transition-colors duration-500 group-hover:text-amber-500"
          />
        </div>
      ) : (
        <div className="group flex h-14 w-14 items-center justify-center rounded-full bg-slate-900/10">
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="h-full w-full cursor-pointer p-3 text-2xl transition-colors duration-500 group-hover:text-amber-500"
          />
        </div>
      )}
    </div>
  );
};

export default DarkMode;
