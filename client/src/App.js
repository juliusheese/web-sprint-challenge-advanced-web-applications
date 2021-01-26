import React, { Link, Switch, Redirect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute'

import Login from "./components/Login";
import "./styles.scss";



function App() {

  return (
    <Router>
      <div className="App">
        <Link to="login">Login</Link>
        <Link to="/bubbles">Bubbles</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
        <Redirect exact from="/bubbles/reload" to="/bubbles" />
        <Route exact path="/" component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
