import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import UserDetails from "./UserDetails";
import UserList from "./UserList";

function App() {
  return (
    <div className="app-container">
      <h1>User List App</h1>
      <Router>
        <Switch>
          <Route path="/userDetails/:username">
            <UserDetails></UserDetails>
          </Route>
          <Route path="/">
            <UserList></UserList>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
