import EventCard from "../components/EventCard";
import Grid from "@mui/material/Grid";

function AllEvents({user, events, lastEventElementRef}) {
  console.log(events);
  console.log(user);
  return (
    <div style={{marginTop: "100px", marginLeft: "165px"}}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={6}
      >
        {events.map((e, index) => {
          if (e.length === index + 1) {
            return (
              <div key={e.id} ref={lastEventElementRef}>
                <EventCard key={e.id} event={e} user={user} />
              </div>
            );
          } else {
            return (
              <div key={e.id}>
                <EventCard key={e.id} event={e} user={user} />
              </div>
            );
          }
        })}
      </Grid>
    </div>
  );
}
export default AllEvents;
