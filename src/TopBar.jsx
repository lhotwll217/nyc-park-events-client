import Logout from "./Logout";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import { Button, Box, Toolbar, AppBar, Typography } from "@mui/material";

const useStyles = makeStyles({
  topbar: {
    zIndex: "1400",
    position: "absolute",
    right: "0",
    marginLeft: "150px",
  },

  rightButtons: {
    float: "right",
    display: "inline",
  },
});

function TopBar({ user, onLogout, loggedIn, handleSearchBarValue }) {
  const classes = useStyles();
  return (
    <Box className={classes.topbar}>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            // sx={{ flexGrow: 1 }}
          >
            NYC Park Events
          </Typography>

          <input
            style={{
              padding: "7px",
              marginLeft: "25px",

              flexBasis: "25%",
              marginRight: "25px",
            }}
            onChange={(e) => handleSearchBarValue(e.target.value)}
            placeholder="Search By Event Title"
            type="search"
          />
          <div style={{ width: "20px", flexGrow: "1" }} />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div>
              {" "}
              {loggedIn ? (
                <Button
                  style={{
                    borderRadius: 5,
                    backgroundColor: "white",
                    padding: "5px 7px",
                    fontSize: ".9rem",
                    fontWeight: "300",
                    marginRight: "10px",
                  }}
                  variant="text"
                  component={NavLink}
                  to="/profile"
                  exact
                >
                  Profile
                </Button>
              ) : null}{" "}
            </div>
            <div>
              {" "}
              {loggedIn ? (
                <Button
                  style={{
                    borderRadius: 5,
                    backgroundColor: "white",
                    padding: "5px 7px",
                    fontSize: ".9rem",
                    fontWeight: "300",
                    marginRight: "10px",
                  }}
                  variant="text"
                  component={NavLink}
                  to="/saved_events"
                  exact
                >
                  Saved Events
                </Button>
              ) : null}{" "}
            </div>
            <div />
            <div>
              {loggedIn ? (
                <Logout onLogout={onLogout} />
              ) : (
                <Button
                  style={{
                    borderRadius: 5,
                    backgroundColor: "white",
                    padding: "5px 7px",
                    fontSize: ".9rem",
                    fontWeight: "300",
                  }}
                  component={NavLink}
                  to="/auth"
                  exact
                >
                  Signup/Login
                </Button>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
