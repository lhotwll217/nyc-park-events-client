import MaterialSignup from "./MaterialSignup";
import Grid from "@mui/material/Grid";
import MaterialLogin from "./MaterialLogin";

function AuthPage({ onLogin }) {
  return (
    <div
      style={{ marginLeft: "200px", marginTop: "80px", marginRight: "50px" }}
    >
      <Grid container justify="center">
        <img
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            marginBottom: "25px",
          }}
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg/800px-Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg.png"
          width={200}
          alt="NYC Parks and Rec"
        />
      </Grid>
      <Grid
        item
        container
        mr={4}
        xs={12}
        sm={6}
        style={{ padding: 10, maxWidth: "100%" }}
        alignItems="flex-start"
        direction="row"
        justifyContent="space-around"
      >
        <MaterialLogin onLogin={onLogin} />

        <MaterialSignup onLogin={onLogin} />
      </Grid>
    </div>
  );
}

export default AuthPage;
