"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="min-h-screen select-none bg-slate-100 text-slate-800 transition-colors duration-200 dark:bg-slate-800 dark:text-slate-100">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
