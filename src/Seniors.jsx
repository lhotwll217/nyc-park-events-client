import EventCard from "./EventCard";
import Grid from "@material-ui/core/Grid";

function Seniors({ user, events }) {
  let seniorsEvents = events.filter(
    (event) =>
      event.categories.toLowerCase().includes("seniors") ||
      event.categories.toLowerCase().includes("senior") ||
      event.title.toLowerCase().includes("seniors") ||
      event.title.toLowerCase().includes("senior")
  );

  if (seniorsEvents) {
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
          {seniorsEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default Seniors;
