import React, { useEffect, useState } from "react";
import { Menu, X, BadgePlus, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme == "dark") {
      sessionStorage.setItem("theme", "dark");
      document.querySelector("html").classList.add("dark");
    } else {
      sessionStorage.setItem("theme", "light");
      document.querySelector("html").classList.remove("dark");
    }
  });

  return (
    <div className="absolute w-full bg-white dark:bg-[#121212] border-b-2 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-white text-3xl">All Todos</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button onClick={changeTheme}>
            {theme === "light" ? <Moon /> : <Sun color="#fff" />}
          </button>
          <button
            type="button"
            className="rounded-md dark:bg-[#121212] px-3 py-2 text-sm font-semibold text-white shadow-sm flex items-center gap-2 border-white border-2 "
          >
            <BadgePlus />
            Create New
          </button>
        </div>
      </div>
    </div>
  );
}
