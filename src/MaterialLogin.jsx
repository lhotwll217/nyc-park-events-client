import { Grid, Button, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function MaterialLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [errors, setErrors] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/server/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
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
        <div
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   maxWidth: 350,
        //   minWidth: 300,
        // }}
        >
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
        {errors.length > 0 && (
          <div style={{ color: "red" }}>
            {errors.map((error) => (
              <p key={error} style={{ margin: "5px" }}>
                {error}
              </p>
            ))}
          </div>
        )}
      </Grid>
    </div>
  );
}

export default MaterialLogin;
