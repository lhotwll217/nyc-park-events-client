import MaterialSignup from "../components/MaterialSignup";
import Grid from "@mui/material/Grid";
import MaterialLogin from "../components/MaterialLogin";

function AuthPage({onLogin}) {
  return (
    <div style={{marginTop: "80px"}}>
      <Grid
        item
        container
        mr={4}
        xs={12}
        sm={6}
        style={{padding: 10, maxWidth: "100%"}}
        alignItems='flex-start'
        direction='row'
        justifyContent='space-around'
      >
        <MaterialLogin onLogin={onLogin} />

        <MaterialSignup onLogin={onLogin} />
      </Grid>
    </div>
  );
}

export default AuthPage;
