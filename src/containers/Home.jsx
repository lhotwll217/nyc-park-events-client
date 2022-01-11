import AllEvents from "./AllEvents";
import InitialLoading from "components/InitialLoading";
import {Grid, Typography} from "@mui/material";

function Home({user, events, loading}) {
  if (!loading && events.length < 1) {
    return (
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={6}
      >
        <Grid item>
          <Typography mt={20} textAlign='center' variant='h4'>
            No Events Found!
          </Typography>
        </Grid>
      </Grid>
    );
  }

  if (events?.length > 0) {
    return (
      <div>
        <AllEvents loading={loading} events={events} user={user} />
      </div>
    );
  } else {
    return <InitialLoading />;
  }
}

export default Home;
