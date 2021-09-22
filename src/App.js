import { useState } from "react";
import "./App.css";
import Home from "./Home";
import AuthPage from "./AuthPage";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState("");

  function onLogin(user) {
    setUser(user);
    setLoggedIn(true);
  }

  function onLogout() {
    setUser([]);
    setLoggedIn(false);
  }

  return (
    <div className="App-header">
      <Router>
        <NavBar loggedIn={loggedIn} onLogout={onLogout} user={user} />

        <Switch>
          <Route exact path="/auth">
            <AuthPage onLogin={onLogin} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
