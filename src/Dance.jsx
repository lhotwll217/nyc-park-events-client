import EventCard from "./EventCard";
import Grid from "@mui/material/Grid";

function Dance({ user, events }) {
  let danceEvents = events.filter(
    (event) =>
      event.categories.toLowerCase().includes("dance") ||
      event.categories.toLowerCase().includes("dance")
  );

  if (danceEvents) {
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
          {danceEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default Dance;
