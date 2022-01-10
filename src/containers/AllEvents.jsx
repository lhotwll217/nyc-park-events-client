import EventCard from "../components/EventCard";
import Grid from "@mui/material/Grid";
import PaginationLoading from "components/PaginationLoading";

function AllEvents({user, events, loading}) {
  return (
    <div style={{marginTop: "100px"}}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={6}
      >
        {events.map((e) => {
          return <EventCard key={e.id} event={e} user={user} />;
        })}
      </Grid>
      {loading && <PaginationLoading loading={loading} events={events} />}
    </div>
  );
}
export default AllEvents;
