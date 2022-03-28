import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login";
import { Platform } from "./pages/platform/platform";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/platform" exact>
          <Platform />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
