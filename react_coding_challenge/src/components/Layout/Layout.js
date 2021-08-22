import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Signin from '../Signin/Signin';
import Homepage from '../Homepage/Homepage';

const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/login']}>
          <Redirect to="/login" />
          <Signin />
        </Route>
        <Route exact path="/home">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}

export default Layout
