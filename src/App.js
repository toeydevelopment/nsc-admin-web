import React from "react";
import "./styles.css";
import { LoginPage } from "./page";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <CSSReset />
        <Router>
          <Switch>
            <Route path="/" component={LoginPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
