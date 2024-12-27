import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./UserList"; // Import the UserList component
import UserDetails from "./UserDetails"; // Import the UserDetails component

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          {/* Route for User List */}
          <Route path="/" exact>
            <h1>User List</h1> {/* Only show this on the User List page */}
            <UserList />
          </Route>

          {/* Route for User Details */}
          <Route path="/users/:id" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
