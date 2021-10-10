import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Sports from "./Sports";
import Seniors from "./Seniors";
import History from "./History";
import Dance from "./Dance";
import Fitness from "./Fitness";
import Music from "./Music";
import Profile from "./Profile";
import Nature from "./Nature";
import Film from "./Film";
import Art from "./Art";
import KidsYouth from "./KidsYouth";
import AuthPage from "./AuthPage";
import Education from "./Education";
import TopBar from "./TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SavedEvents from "./SavedEvents";
import LoggedInDrawer from "./LoggedInDrawer";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState("");
  const [events, setEvents] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [categorySearch, setCategorySearch] = useState("");

  function handleSearchBarValue(e) {
    setSearchBarValue(e.toLowerCase());
  }

  function handleCategorySearch(e) {
    setCategorySearch(e.toLowerCase());
  }

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

  useEffect(() => {
    async function eventFetch() {
      let res = await fetch("/server/events");
      let data = await res.json();

      setEvents(data.slice(0, 1000));
    }
    eventFetch();
    console.log("Fetched");
  }, []);

  function onLogin(user) {
    setUser(user);
    setLoggedIn(true);
  }

  function onLogout() {
    setUser([]);
    setLoggedIn(false);
  }

  let searchedEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchBarValue) &&
      event.categories.toLowerCase().includes(categorySearch)
  );

  if (user && events.length > 0) {
    return (
      <div>
        <Router>
          <TopBar
            loggedIn={loggedIn}
            onLogout={onLogout}
            user={user}
            handleSearchBarValue={handleSearchBarValue}
          />
          <LoggedInDrawer handleCategorySearch={handleCategorySearch} />
          <Switch>
            <Route exact path="/auth">
              <AuthPage onLogin={onLogin} />
            </Route>
            <Route exact path="/">
              <Home user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/sports">
              <Sports user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/seniors">
              <Seniors user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/education">
              <Education user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/kids_youth">
              <KidsYouth user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/fitness">
              <Fitness user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/film">
              <Film user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/art">
              <Art user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/music">
              <Music user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/dance">
              <Dance user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/nature">
              <Nature user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/history">
              <History user={user} events={searchedEvents} />
            </Route>
            <Route exact path="/profile">
              <Profile user={user} setUser={setUser} />
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
