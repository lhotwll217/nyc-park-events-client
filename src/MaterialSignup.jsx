import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button, TextField, Typography } from "@mui/material";

function MaterialSignup({ onLogin }) {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [errors, setErrors] = useState(null);

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
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        history.push("/");
      } else {
        r.json().then((data) => setErrors(data.errors));
      }
    });
  }

  return (
    <div>
      <Grid container item>
        <div />
        <div>
          {errors && (
            <div style={{ color: "red", maxWidth: "300px" }}>
              {errors.map((error) => (
                <Typography
                  fontSize=".875rem"
                  style={{ maxWidth: "300px", margin: "2px" }}
                  key={error}
                >
                  {error}
                </Typography>
              ))}
            </div>
          )}
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
        </div>
      </Grid>
    </div>
  );
}

export default MaterialSignup;
