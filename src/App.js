import React from "react";
import { router } from "./router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyProvider } from "./context/context"

export default function RouterExample() {

  return (
    <Router>
      <MyProvider>
        
        <Switch>
          {router.map((route) => {
            const Component = route.component;
            return (
              <Route key={route.path} path={route.path} exact={true}>
                <Component key={route.path} />
              </Route>
            );
          })}
        </Switch>
      </MyProvider>
    </Router>
  );
}
