import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";

function App() {
  const [user, setUser] = useState([]);

  function onLogin(user) {
    setUser(user);
  }

  function onLogout() {
    setUser([]);
  }
  console.log(user);
  return (
    <div>
      <Logout onLogout={onLogout} />
      <div>
        <header className="App-header">
          <div>Hello World </div>
          <Login onLogin={onLogin} />
          <Signup onLogin={onLogin} />
          <Home />
        </header>
      </div>
    </div>
  );
}

export default App;
