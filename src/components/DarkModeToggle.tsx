"use client";
import { Moon, Sun } from "lucide-react";
import { FC, useEffect, useState } from "react";

import { motion } from "framer-motion";

const DarkModeToggle: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    let darkModeClass: string = "dark";
    // Target the html tag of the page
    const rootElement: HTMLElement = document.documentElement;

    if (isDarkMode) {
      rootElement.classList.add(darkModeClass);
    } else {
      rootElement.classList.remove(darkModeClass);
    }
  }, [isDarkMode]);

  const handleToggle = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      {isDarkMode ? (
        <motion.button
          key="sun"
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.3 } }}
          onClick={handleToggle}
        >
          <Sun strokeWidth={1.5} />
        </motion.button>
      ) : (
        <motion.button
          key="moon"
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.3 } }}
          onClick={handleToggle}
        >
          <Moon strokeWidth={1.5} />
        </motion.button>
      )}
    </div>
  );
};

export default DarkModeToggle;
