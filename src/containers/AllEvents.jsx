import EventCard from "../components/EventCard";
import Grid from "@mui/material/Grid";
import PaginationLoading from "components/PaginationLoading";

function AllEvents({user, events, loading, hasMore}) {
  return (
    <div style={{marginTop: "30px"}}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={3}
      >
        {events.map((e) => {
          console.log(e);
          return <EventCard key={e.id} event={e} user={user} />;
        })}
      </Grid>

      {loading && hasMore && <PaginationLoading />}
    </div>
  );
}
export default AllEvents;
