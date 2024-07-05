"use client"
import { Moon, Sun } from 'lucide-react'
import  { FC, useEffect, useState } from 'react'

const DarkModeToggle: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    let darkModeClass: string = "dark"
    // Target the html tag of the page
    const rootElement:HTMLElement = document.documentElement;

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
      <button onClick={handleToggle}>
      {isDarkMode ? <Sun /> : <Moon /> }
      </button>
    </div>
  )
}

export default DarkModeToggle