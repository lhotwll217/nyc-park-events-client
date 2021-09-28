import { useState, useEffect } from "react";

import "./App.css";
import Home from "./Home";
import Sports from "./Sports";
import Seniors from "./Seniors";
import History from "./History";
import Dance from "./Dance";
import Fitness from "./Fitness";
import Music from "./Music";
import Nature from "./Nature";
import Film from "./Film";
import Art from "./Art";
import KidsYouth from "./KidsYouth";
import AuthPage from "./AuthPage";
import Education from "./Education";
import TopBar from "./TopBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SavedEvents from "./SavedEvents";
import LoggedInDrawer from "./LoggedInDrawer";
import { makeStyles } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState("");
  const classes = useStyles();
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
      let res = await fetch("/api");
      let data = await res.json();
      console.log(data);
      let events = data.filter(
        (a) => a.startdate >= moment(new Date()).format("YYYY-MM-DD")
      );
      console.log(events);
      let filteredEvents = events.filter(
        (event) =>
          event.startdate !== moment(new Date()).format("YYYY-MM-DD") ||
          new Date(moment(event.endtime, "hh:mm a").format()) - new Date() > 0
      );
      console.log(filteredEvents);
      setEvents(filteredEvents);
      console.log(new Date(events[0].startdate));
    }
    eventFetch();
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

  // let categorySearchEvents = searchedEvents.filter((event) =>
  //   event.title.toLowerCase().includes(categorySearch)
  // );

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
