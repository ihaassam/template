import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
// eslint-disable-next-line import/no-cycle
import Layout from './components/Layout';
import Login from './container/Login';
import Fallback404 from './components/Fallbacks/Fallback404';
import AddRequest from './container/AddRequest';
import Home from "./container/Home";


export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" component={Layout} />
      </Switch>
    </Router>
  );
}
export function ContentLayout() {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/add-request" exact component={AddRequest} />
      <Route path="/" exact component={() => <Redirect to="/request" />} />
      <Route path="*" component={Fallback404} />
    </Switch>
  );
}
