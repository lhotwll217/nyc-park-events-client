import Login from "./Login";
import Signup from "./Signup";
import Grid from "@material-ui/core/Grid";

function AuthPage({ onLogin }) {
  return (
    <div style={{ marginTop: "100px", marginLeft: "200px" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
        mt="20"
      >
        <Login onLogin={onLogin} />
        <Signup onLogin={onLogin} />
      </Grid>
    </div>
  );
}

export default AuthPage;
