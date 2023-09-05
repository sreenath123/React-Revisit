import { useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme((s) => (s === "light" ? "dark" : "light"));
  }
  return { theme, toggleTheme };
}
