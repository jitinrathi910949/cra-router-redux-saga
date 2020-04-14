import React, {Suspense, lazy} from "react";
// import { Router, Route, IndexRoute, Switch } from "react-router";
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { history } from "./store/index";

const Test = lazy(() => import('./Pages/Test'));

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Suspense fallback ={<div>loading...</div>}>
    <Switch>
    <Redirect exact from="/" to="/test" />
     <Route path="/" component={Test} />
       
    <Route path="/test" component={Test} />
    </Switch>
    </Suspense>
  </Router>
);

export default router;