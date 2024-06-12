import React from "react";
import Toggle from "../components/DarkModeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex">
            <p className="font-mono antialiased font-bold">
              DATA LOGGER SISTEM MONITORING
            </p>
          </div>
          <Toggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
