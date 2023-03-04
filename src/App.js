import { ColorModeContext, useMode } from "./theme/context";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import TopBar from "./components/static/TopBar";
import SideBar from "./components/static/sidebar/SideBar";
import Router from "./route/Router";
import {getUsers} from "./service/users";

//CssBaseline is going to reset the css to default values.
//ThemeProvider is going to provide the ability to pass in the themes into MUI components.
export default function App() {
  const [theme, colorMode] = useMode();
  console.log(getUsers()); 
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className="app">
            <SideBar />
            <main className="content">
              <TopBar />
              <Router />
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};