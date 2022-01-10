import AllEvents from "./AllEvents";
import {Grid, CircularProgress, Typography} from "@mui/material";
import InitialLoading from "components/InitialLoading";

function Home({user, events, loading}) {
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
