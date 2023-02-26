import { ColorModeContext, useMode } from "./theme/context";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./components/static/TopBar";
import SideBar from "./components/static/SideBar";
import Router from "./route/Router";

//CssBaseline is going to reset the css to default values.
//ThemeProvider is going to provide the ability to pass in the themes into MUI components.
export default function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
            <SideBar />
            <Router />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
