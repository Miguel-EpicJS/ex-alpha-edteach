import React, { useEffect } from "react";
import { router, LoginRouterComponent } from "./router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyProvider } from "./context/context"

export default function RouterExample() {

  useEffect(() => {
    if(localStorage.getItem("login") === null){
      localStorage.setItem("login", JSON.stringify({logged: false, user: null}))
    }
  }, [])

  return (
    <Router>
      <MyProvider>
        
        <Switch>
          {router.map((route) => {
            const opt = (JSON.parse(localStorage.getItem("login")).logged === true && JSON.parse(localStorage.getItem("login")) !== null) ? {key: route.path, path: route.path, component: route.component} : {key: route.path, path: route.path, component: LoginRouterComponent.component};
            return (
              <Route {...opt} exact={true} />
            );
          })}
        </Switch>
      </MyProvider>
    </Router>
  );
}
