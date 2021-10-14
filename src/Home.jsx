import AllEvents from "./AllEvents";
import { Grid, CircularProgress } from "@mui/material";

function Home({ user, events }) {
  if (events) {
    return (
      <div>
        <div style={{ marginLeft: "75px" }}>
          <Grid ml={5} container justify="center">
            <img
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                marginTop: "80px",
              }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg/800px-Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg.png"
              width={150}
              alt="NYC Parks and Rec"
            />
          </Grid>
        </div>

        <AllEvents events={events} user={user} />
      </div>
    );
  } else {
    return (
      <Grid ml={5} container justify="center">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            marginTop: "80px",
          }}
        >
          <CircularProgress color="primary" />
        </div>
      </Grid>
    );
  }
}

export default Home;
