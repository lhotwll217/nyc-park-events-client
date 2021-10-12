import EventCard from "./EventCard";
import Grid from "@mui/material/Grid";

function AllEvents({ user, events }) {
  console.log(events);
  console.log(user);
  return (
    <div style={{ marginTop: "100px", marginLeft: "130px" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
      >
        {events.map((e) => {
          return <EventCard key={e.id} event={e} user={user} />;
        })}
      </Grid>
    </div>
  );
}
export default AllEvents;
