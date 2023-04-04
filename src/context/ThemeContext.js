// References
// https://github.com/KnightHacks/hackathon-2021-frontend/

import { createContext, useEffect, useState } from "react";  


const getInitialTheme = () => {
  if ((localStorage.getItem("theme") === "dark") || (localStorage.getItem("theme") === null)) {
    return "dark";
  }
  else {
    return "light";
  }
}

export const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(getInitialTheme);


  const rawSetTheme = (newTheme) => {
    const root = document.documentElement;
    const isDark = (newTheme === "dark");

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}