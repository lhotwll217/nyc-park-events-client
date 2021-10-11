import EventCard from "./EventCard";
import Grid from "@mui/material/Grid";

function Music({ user, events }) {
  let musicEvents = events.filter(
    (event) =>
      event.categories.toLowerCase().includes("music") ||
      event.categories.toLowerCase().includes("concert")
  );

  if (musicEvents) {
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
          {musicEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default Music;
