import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./settings";
// context for color mode
//  we create a context with the react func create context
//  we pass in   a func called: toggleColorMode: () => {},
//  the func will allow us to change the color mode
//  the func will be available throughout the entire app

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// we set the mode as a state
//
export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
