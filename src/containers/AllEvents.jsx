import EventCard from "../components/EventCard";
import Grid from "@mui/material/Grid";
import PaginationLoading from "components/PaginationLoading";

function AllEvents({user, events, loading, hasMore}) {
  console.log(loading);

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
          return <EventCard key={e.id} event={e} user={user} />;
        })}
      </Grid>

      {loading && hasMore && (
        <PaginationLoading key={loading.toString()} loading={loading} />
      )}
    </div>
  );
}
export default AllEvents;
