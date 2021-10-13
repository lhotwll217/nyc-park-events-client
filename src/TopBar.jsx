import Logout from "./Logout";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

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

function TopBar({
  user,
  onLogout,
  loggedIn,
  handleSearchBarValue,
  date,
  setDate,
}) {
  const classes = useStyles();

  function handleClr(e) {
    e.stopPropagation();
    setDate(null);
  }

  return (
    <Box className={classes.topbar}>
      <AppBar className={classes.topbar}>
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
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              clearable={true}
              label="Search Date"
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
              // renderInput={(params) => <TextField {...params} />}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <input
                    style={{
                      padding: "7px",
                      marginLeft: "25px",

                      flexBasis: "25%",
                      marginRight: "1px",
                    }}
                    ref={inputRef}
                    {...inputProps}
                    placeholder="Search By Date"
                  />
                  {date ? (
                    <IconButton onClick={(e) => handleClr(e)}>
                      <ClearIcon />
                    </IconButton>
                  ) : (
                    InputProps?.endAdornment
                  )}
                </Box>
              )}
            />
          </LocalizationProvider>

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
