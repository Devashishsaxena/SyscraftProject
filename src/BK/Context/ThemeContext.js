import { createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  //logic here

  return (
    <ThemeContext.Provider value={{ color: "blue" }}>
      {children}
    </ThemeContext.Provider>
  );
}
