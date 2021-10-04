import Login from "./Login";
import Signup from "./Signup";
import Grid from "@material-ui/core/Grid";
import MaterialLogin from "./MaterialLogin";

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
        <MaterialLogin onLogin={onLogin} />
        {/* <Signup onLogin={onLogin} /> */}
      </Grid>
    </div>
  );
}

export default AuthPage;
