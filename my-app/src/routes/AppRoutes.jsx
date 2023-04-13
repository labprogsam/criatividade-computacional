import React from "react";
import { Switch, Route } from "react-router-dom";
import { PublicRoutes } from './Routes';

const AppRoutes = () => {

  return (
    <Switch>
      {PublicRoutes.map((route) => {
        return (
          <Route
            exact
            key={route.name}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  )
};

export default AppRoutes;