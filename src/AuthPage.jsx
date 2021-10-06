import MaterialSignup from "./MaterialSignup";
import Grid from "@material-ui/core/Grid";
import MaterialLogin from "./MaterialLogin";

function AuthPage({ onLogin }) {
  return (
    <div style={{ marginTop: "100px", marginLeft: "200px" }}>
      <Grid
        item
        container
        xs={12}
        sm={6}
        style={{ padding: 10, maxWidth: "100%" }}
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <MaterialLogin onLogin={onLogin} />
        <Grid item>
          <h1> or</h1>
        </Grid>

        <MaterialSignup onLogin={onLogin} />
      </Grid>
    </div>
  );
}

export default AuthPage;
