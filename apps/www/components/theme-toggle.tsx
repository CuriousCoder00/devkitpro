"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center space-x-2">
      <Button
        className="relative z-10"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        size={"icon"}
        variant={"ghost"}
      >
        <Sun className="absolute scale-0 dark:scale-100" />
        <MoonStar className="absolute dark:scale-0 scale-100" />
      </Button>
    </div>
  );
};

export default ThemeToggle;
