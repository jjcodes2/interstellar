import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: grey,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
