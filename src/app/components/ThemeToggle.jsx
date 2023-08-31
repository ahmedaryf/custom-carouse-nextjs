"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("");

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='mr-6 text-red-700 dark:text-white'>
      {theme === "dark" ? (
        <BsSun size={30} cursor='pointer' onClick={() => setTheme("light")} />
      ) : (
        <FiMoon size={30} cursor='pointer' onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}

export default ThemeToggle;
