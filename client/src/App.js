import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import "./styles.scss";
/**componentDidMount( ){
  axios.get('http://localhost:5000/api/colors');
  console.log(axios.get('http://localhost:5000/api/colors'));
} */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/bubblepage" />
      )
    }
  />
);

function App() {
  
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/bubblepage' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
