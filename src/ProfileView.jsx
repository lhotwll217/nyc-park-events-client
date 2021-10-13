import { useState } from "react";
import { Button, Grid, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 325,
    maxWidth: 325,
    padding: "35px",

    display: "inline-block",

    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
});

function ProfileView({ user, setUser }) {
  const [openNameInput, setOpenNameInput] = useState(false);
  const [openAddressInput, setOpenAddressInput] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState(user.profile.first_name);
  const [userAddress, setUserAddress] = useState(user.profile.address);
  const [nameErrors, setNameErrors] = useState(null);
  const [addressErrors, setAddressErrors] = useState(null);
  const classes = useStyles();

  function updateFirstName(e) {
    e.preventDefault();

    fetch("/server/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ first_name: firstName, user_id: user.id }),
    }).then((r) => {
      if (r.ok) {
        r.json()
          .then((data) => {
            let updatedUser = user;
            updatedUser.profile.first_name = data.first_name;
            setUser(updatedUser);
            setUserName(data.first_name);
            setNameErrors(null);
          })
          .then(setFirstName(""))
          .then(setOpenNameInput(!openNameInput));
      } else {
        r.json().then((data) => setNameErrors(data.errors));
      }
    });
  }

  function updateAddress(e) {
    e.preventDefault();
    fetch("/server/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ address, user_id: user.id }),
    }).then((r) => {
      if (r.ok) {
        r.json()
          .then((data) => {
            let updatedUser = user;
            updatedUser.profile.address = data.address;
            setUser(updatedUser);
            setUserAddress(data.address);
            setAddressErrors(null);
          })
          .then(setAddress(""))
          .then(setOpenAddressInput(!openAddressInput));
      } else {
        r.json().then((data) => setAddressErrors(data.errors));
      }
    });
  }

  if (user?.profile) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Grid item>
          <Card variant="outlined" className={classes.root}>
            <Typography textAlign="center" fontSize="1.6rem" fontWeight="600">
              Profile
            </Typography>
            {nameErrors && (
              <div style={{ color: "red" }}>
                {nameErrors.map((error) => (
                  <Typography
                    key={error}
                    fontSize=".875rem"
                    style={{ maxWidth: "300px", margin: "2px" }}
                  >
                    {error}
                  </Typography>
                ))}
              </div>
            )}
            <Typography ml={1} mb={1} fontSize="1.6rem">
              {userName}
            </Typography>
            <Button onClick={() => setOpenNameInput(!openNameInput)}>
              Edit First Name
            </Button>
            {openNameInput && (
              <form onSubmit={updateFirstName}>
                <input
                  type="text"
                  id="editFirstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Button type="submit">Submit</Button>
              </form>
            )}
            {addressErrors && (
              <div style={{ color: "red" }}>
                {addressErrors.map((error) => (
                  <Typography
                    key={error}
                    fontSize=".875rem"
                    style={{ maxWidth: "300px", margin: "2px" }}
                  >
                    {error}
                  </Typography>
                ))}
              </div>
            )}
            <Typography ml={1} mb={1} fontSize="1.4rem">
              {userAddress}
            </Typography>
            <Button onClick={() => setOpenAddressInput(!openAddressInput)}>
              Edit Address
            </Button>
            {openAddressInput && (
              <form onSubmit={updateAddress}>
                <input
                  type="text"
                  id="editAddress"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Button type="submit">Submit</Button>
              </form>
            )}
          </Card>
        </Grid>
      </div>
    );
  }
}

export default ProfileView;
