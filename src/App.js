import { ColorModeContext, useMode } from "./theme/context";
import { CssBaseline, ThemeProvider } from "@mui/material";

//CssBaseline is going to reset the css to default values.
//ThemeProvider is going to provide the ability to pass in the themes into MUI components.
export default function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content"></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
