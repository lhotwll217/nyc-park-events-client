//@ts-ignore
import {useState, useEffect} from "react";
import "./App.css";
import Home from "./containers/Home";
import Sports from "./components/categories/Sports";
import Seniors from "./components/categories/Seniors";
import History from "./components/categories/History";
import Dance from "./components/categories/Dance";
import Fitness from "./components/categories/Fitness";
import Music from "./components/categories/Music";
import Profile from "./containers/Profile";
import Nature from "./components/categories/Nature";
import Film from "./components/categories/Film";
import Art from "./components/categories/Art";
import KidsYouth from "./components/categories/KidsYouth";
import AuthPage from "./containers/AuthPage";
import Education from "./components/categories/Education";
import TopBar from "./components/TopBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SavedEvents from "./containers/SavedEvents";
import LoggedInDrawer from "./components/LoggedInDrawer";
import moment from "moment";
import ScrollToTop from "./functions/ScrollToTop";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [events, setEvents] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [date, setDate] = useState(null);
  const loadMoreEvents = () => {};

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

  const handleScroll = (e) => {
    let top = e.target.documentElement.scrollTop;
    let height = e.target.documentElement.scrollHeight;
    let scrollBar = window.innerHeight;
    console.log(top, height, scrollBar);
    if (top + scrollBar + 1 >= height) {
      console.log("bottom page");
    }
  };

  useEffect(() => {
    async function eventFetch() {
      let res = await fetch("http://localhost:3000/paginate");
      let data = await res.json();
      setEvents(data);
      window.addEventListener("scroll", handleScroll);
    }
    eventFetch();
  }, []);
  console.log(events);

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

  function dateFilteredSearchedEvents() {
    if (date) {
      let eventsOnDate = searchedEvents.filter(
        (e) =>
          moment(e.start_date_time).format("YYYY-MM-DD") ===
          moment(date._d).format("YYYY-MM-DD")
      );
      return eventsOnDate;
    } else {
      return searchedEvents;
    }
  }

  return (
    <div>
      <Router>
        <ScrollToTop>
          <TopBar
            key={user}
            date={date}
            setDate={setDate}
            loggedIn={loggedIn}
            onLogout={onLogout}
            handleSearchBarValue={handleSearchBarValue}
          />
          <LoggedInDrawer handleCategorySearch={handleCategorySearch} />
          <Switch>
            <Route exact path='/auth'>
              <AuthPage onLogin={onLogin} />
            </Route>
            <Route exact path='/'>
              <Home user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/sports'>
              <Sports user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/seniors'>
              <Seniors user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/education'>
              <Education user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/kids_youth'>
              <KidsYouth user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/fitness'>
              <Fitness user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/film'>
              <Film user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/art'>
              <Art user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/music'>
              <Music user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/dance'>
              <Dance user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/nature'>
              <Nature user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/history'>
              <History user={user} events={dateFilteredSearchedEvents()} />
            </Route>
            <Route exact path='/profile'>
              <Profile user={user} setUser={setUser} />
            </Route>
            <Route exact path='/saved_events'>
              <SavedEvents user={user} />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
