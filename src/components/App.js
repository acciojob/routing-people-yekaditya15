import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <Router>
      <div>
        <h1>User List</h1>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/users/:id" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
