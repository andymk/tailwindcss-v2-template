import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/">
            <LoginPage />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  );
};

export default AppRouter;
