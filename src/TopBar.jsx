import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "./Logout";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Popover } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  topbar: {
    zIndex: "1400",
    position: "absolute",
    width: "100%",
    // heighth:
  },
});

function TopBar({ user, onLogout, loggedIn, handleSearchBarValue }) {
  const [anchor, setAnchor] = useState(null);

  const openPopover = (e) => {
    setAnchor(e.currentTarget);
  };
  const classes = useStyles();
  return (
    <Box className={classes.topbar}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NYC Park Events
          </Typography>
          <Button
            // aria-describedby={id}
            variant="contained"
            onClick={openPopover}
          >
            Open Popover
          </Button>
          <Popover
            // id={id}
            open={Boolean(anchor)}
            onClose={() => setAnchor(null)}
            anchorEl={anchor}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            style={{ zIndex: "1500" }}
          >
            The content of the Popover.
          </Popover>

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
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;