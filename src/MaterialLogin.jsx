import { Grid, Button, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function MaterialLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/server/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));

    history.push("/");
  }

  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          container
          item
          xs={12}
          sm={6}
          style={{ padding: 10 }}
          alignItems="center"
          direction="column"
          justify="space-between"
        >
          <div />
          <div
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   maxWidth: 350,
          //   minWidth: 300,
          // }}
          >
            <Grid container justify="center">
              <img
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                }}
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg/800px-Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg.png"
                width={200}
                alt="NYC Parks and Rec"
              />
            </Grid>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 350,
                minWidth: 300,
              }}
            >
              <TextField
                label="Email"
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ height: 20 }} />

              <Button type="submit" color="primary" variant="contained">
                Log In
              </Button>
            </form>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}

export default MaterialLogin;
