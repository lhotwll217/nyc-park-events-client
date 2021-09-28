import EventCard from "./EventCard";
import Grid from "@material-ui/core/Grid";

function Education({ user, events }) {
  let educationEvents = events.filter((event) =>
    event.categories.toLowerCase().includes("education")
  );

  if (educationEvents) {
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
          {educationEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default Education;
