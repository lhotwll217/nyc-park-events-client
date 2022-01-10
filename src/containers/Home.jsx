import AllEvents from "./AllEvents";
import {Grid, CircularProgress, Typography} from "@mui/material";

function Home({user, events, loading}) {
  if (events?.length > 0) {
    return (
      <div>
        <AllEvents loading={loading} events={events} user={user} />
      </div>
    );
  } else {
    return (
      <Grid ml={5} container justifyContent='center'>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            marginTop: "250px",
          }}
        >
          <CircularProgress size={100} color='primary' />
          <Typography mr={2} mt={6} variant='h4' textAlign='center'>
            Loading{"  "}
          </Typography>
        </div>
      </Grid>
    );
  }
}

export default Home;
