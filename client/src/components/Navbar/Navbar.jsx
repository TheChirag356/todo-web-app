import React, { useEffect, useState } from "react";
import { Menu, X, BadgePlus, Sun, Moon } from "lucide-react";
import { DialogBox } from "../DialogBox/DialogBox.jsx";
import { Toaster, toast } from "sonner";

export function Navbar() {
  const [theme, setTheme] = useState("dark");

  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

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
    <div className="fixed top-0 left-0 right-0 w-full bg-white/30 dark:bg-[#121212]/30 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-black dark:text-white text-3xl">
            All Todos
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Toaster richColors />

          <button onClick={changeTheme}>
            {theme === "light" ? <Moon /> : <Sun color="#fff" />}
          </button>
          <button
            type="button"
            className="rounded-md dark:bg-[#121212] px-3 py-2 text-sm font-semibold text-black dark:text-white shadow-sm flex items-center gap-2 border-slate-950 dark:border-white border-2 "
            onClick={toggleComponent}>
            <BadgePlus />
            Create New
          </button>
          {showComponent && <DialogBox />}
        </div>
      </div>
    </div>
  );
}
