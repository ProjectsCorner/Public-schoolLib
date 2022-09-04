import React from "react";
import ReactDom from "react-dom/client";
import "@fontsource/ubuntu";
import "./App.css";

import { createTheme, ThemeProvider} from '@mui/material/styles';
import App from "./app";

const THEME = createTheme({
  typography: {
    fontFamily: `"Ubuntu", sans-serifs`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
const AppWithTheme = () => (
  <ThemeProvider theme={THEME}>
    <App />
  </ThemeProvider>
);

// ReactDom.render(<AppWithTheme />, document.getElementById("root"));
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppWithTheme />);
