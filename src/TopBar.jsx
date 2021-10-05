import Logout from "./Logout";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Toolbar,
  AppBar,
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  topbar: {
    zIndex: "1400",
    position: "absolute",
    width: "100%",
    // heighth:
  },
});

function TopBar({ user, onLogout, loggedIn, handleSearchBarValue }) {
  const classes = useStyles();
  return (
    <Box className={classes.topbar}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NYC Park Events
          </Typography>

          <input
            style={{ padding: "7px", marginRight: "50px" }}
            onChange={(e) => handleSearchBarValue(e.target.value)}
            placeholder="Search By Event Title"
            type="search"
          />

          <div>
            {" "}
            {loggedIn ? (
              <Button
                color="secondary"
                variant="text"
                component={NavLink}
                to="/saved_events"
                exact
              >
                Saved Events
              </Button>
            ) : null}{" "}
          </div>
          <div>
            {loggedIn ? (
              <Logout onLogout={onLogout} />
            ) : (
              <Button
                color="secondary"
                variant="text"
                component={NavLink}
                to="/auth"
                exact
              >
                Signup/Login
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
