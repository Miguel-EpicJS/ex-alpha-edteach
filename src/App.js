import React from "react";
import { router } from "./router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MyProvider } from "./context/context"

export default function RouterExample() {

/*   const value = useContext(MyContext);
 */  /* if (value.user === false && window.location.pathname !== "/") {
    return (
      <Router>
        <MyProvider>

          <Redirect to="/" />  

          <Switch>
            {router.map((route) => {
              const Component = route.component;
              return (
                <Route key={route.path} path={route.path} exact={true}>
                  <Component />
                </Route>
              );
            })}
          </Switch>
        </MyProvider>
      </Router>
    )
  } */

  return (
    <Router>
      <MyProvider>
        <Navbar /> 


        <Switch>
          {router.map((route) => {
            const Component = route.component;
            return (
              <Route key={route.path} path={route.path} exact={true}>
                <Component />
              </Route>
            );
          })}
        </Switch>
      </MyProvider>
    </Router>
  );
}
