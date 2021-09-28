import EventCard from "./EventCard";
import Grid from "@material-ui/core/Grid";

function Sports({ user, events }) {
  let sportsEvents = events.filter((event) =>
    event.categories.toLowerCase().includes("sports")
  );

  console.log(sportsEvents);

  if (sportsEvents) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}
          mt="20"
        >
          {sportsEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default Sports;
