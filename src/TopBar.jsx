import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logout from "./Logout";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Popover } from "@material-ui/core";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  topbar: {
    zIndex: "1400",
    position: "absolute",
    width: "100%",
    // heighth:
  },
});

function TopBar({
  user,
  onLogout,
  loggedIn,
  handleSearchBarValue,
  date,
  setDate,
}) {
  const [anchor, setAnchor] = useState(null);

  const openPopover = (e) => {
    setAnchor(e.currentTarget);
  };
  const classes = useStyles();

  function nullDate() {
    setAnchor(null);
    setDate(null);
  }
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
            onClose={nullDate}
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <CalendarPicker
                onChange={(newDate) => setDate(newDate)}
                format="yyyy-mm-dd"
              />
            </LocalizationProvider>
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
