//@ts-ignore
import {useState, useEffect} from "react";
import "./App.css";
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import AppLogo from "components/AppLogo";
import AuthPage from "./containers/AuthPage";

import TopBar from "./components/TopBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SavedEvents from "./containers/SavedEvents";

import moment from "moment";
import ScrollToTop from "./functions/ScrollToTop";
import useGetEvents from "functions/getEventsHook";
import PaginationLoading from "components/PaginationLoading";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState(null);
  const [categorySearch, setCategorySearch] = useState("");
  const [date, setDate] = useState(null);
  const [page, setPage] = useState(1);

  const {error, loading, events, hasMore} = useGetEvents(
    date,
    page,
    searchBarValue
  );

  if (loading) {
    console.log("loading");
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("unmounted");
    };
  }, []);

  function handleDateSelect(e) {
    setDate(e);
    setPage(1);
  }

  function handleSearchBarValue(e) {
    setSearchBarValue(e.toLowerCase());
    setPage(1);
  }

  function handleClr(e) {
    e.stopPropagation();
    setDate(null);
    setPage(1);
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
    if (top + scrollBar + 1 >= height) {
      console.log("bottom");
      setPage((prevPage) => prevPage + 1);
    }
  };

  function onLogin(user) {
    setUser(user);
    setLoggedIn(true);
  }

  function onLogout() {
    setUser([]);
    setLoggedIn(false);
  }

  return (
    <div>
      <Router>
        <ScrollToTop>
          <TopBar
            key={user}
            date={date}
            loggedIn={loggedIn}
            onLogout={onLogout}
            handleSearchBarValue={handleSearchBarValue}
            handleClr={handleClr}
            handleDateSelect={handleDateSelect}
          />
          <AppLogo />
          <Switch>
            <Route exact path='/auth'>
              <AuthPage onLogin={onLogin} />
            </Route>
            <Route exact path='/'>
              <Home loading={loading} user={user} events={events} />
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
