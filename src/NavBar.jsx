import Logout from "./Logout";
import { NavLink } from "react-router-dom";

function NavBar({ user, onLogout, loggedIn, handleSearchBarValue }) {
  return (
    <div style={{ display: "block", marginBottom: "55px" }}>
      <header className="Navbar">
        <div className="Toolbar">
          <div className="Logo">
            {" "}
            <span role="img" aria-label="logo">
              😏
            </span>{" "}
          </div>
          <div className="Title"> My Sweet App </div>
          <input
            onChange={(e) => handleSearchBarValue(e.target.value)}
            type="text"
            placeholder="Search By Event Title"
          />
          <div>
            {" "}
            {loggedIn ? (
              <NavLink to="/saved_events" exact>
                Saved Events
              </NavLink>
            ) : null}{" "}
          </div>
          <div>
            {loggedIn ? (
              <Logout onLogout={onLogout} />
            ) : (
              <NavLink to="/auth" exact>
                Signup/Login
              </NavLink>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
