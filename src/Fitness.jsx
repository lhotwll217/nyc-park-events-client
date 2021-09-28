import EventCard from "./EventCard";
import Grid from "@material-ui/core/Grid";

function Fitness({ user, events }) {
  let fitnessEvents = events.filter((event) =>
    event.categories.toLowerCase().includes("fitness")
  );

  if (fitnessEvents) {
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
          {fitnessEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default Fitness;
