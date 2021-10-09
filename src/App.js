import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Routes from "./Routes";

const browserHistory = createBrowserHistory();

const App = () => {
  const isDarkMode = false;

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: {
            main: "#27acc2",
          },
          text: {
            secondary: "#27acc2",
          },
        },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
