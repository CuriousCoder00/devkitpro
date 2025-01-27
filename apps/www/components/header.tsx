import React from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <nav className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold font-geist text-indigo-700 dark:text-indigo-500">
              DevKitPro
            </Link>
            <Link
              href="/docs"
              className="text-muted-foreground hover:text-blue-600"
            >
              Docs
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
