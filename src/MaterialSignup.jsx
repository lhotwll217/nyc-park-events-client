import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button, TextField } from "@mui/material";

function MaterialSignup({ onLogin }) {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/server/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        password_confirmation: passwordConfirmation,
        email,
      }),
    })
      .then((r) => r.json())
      .then(onLogin);

    history.push("/");
  }

  return (
    <div>
      <Grid container item>
        <div />
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
          <TextField
            label="Password Confirm"
            margin="normal"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />

          <Button type="submit" color="primary" variant="contained">
            Sign Up
          </Button>
        </form>
      </Grid>
    </div>
  );
}

export default MaterialSignup;
