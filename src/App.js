import { useState, useEffect } from "react";

import "./App.css";
import Home from "./Home";
import AuthPage from "./AuthPage";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SavedEvents from "./SavedEvents";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    fetch("/server/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        setLoggedIn(true);
      } else {
        setUser([]);
      }
    });
  }, []);

  // useEffect(() => {
  //   async function getMe() {
  //     let res = await fetch("http://localhost:3000/me");
  //     if (res.ok) {
  //       console.log(res);
  //       let data = await res.json();
  //       setUser(data);
  //       setLoggedIn(true);
  //     }
  //     getMe();
  //   }
  // });

  function onLogin(user) {
    setUser(user);
    setLoggedIn(true);
  }

  function onLogout() {
    setUser([]);
    setLoggedIn(false);
  }

  if (user) {
    return (
      <div>
        <Router>
          <NavBar loggedIn={loggedIn} onLogout={onLogout} user={user} />

          <Switch>
            <Route exact path="/auth">
              <AuthPage onLogin={onLogin} />
            </Route>
            <Route exact path="/">
              <Home user={user} />
            </Route>
            <Route exact path="/saved_events">
              <SavedEvents user={user} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  } else {
    return <h1>Render</h1>;
  }
}

export default App;
