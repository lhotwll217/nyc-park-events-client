import EventCard from "./EventCard";
import { Grid, Typography } from "@mui/material";

function Music({ user, events }) {
  let musicEvents = events.filter(
    (event) =>
      event.categories.toLowerCase().includes("music") ||
      event.categories.toLowerCase().includes("concert")
  );

  if (musicEvents) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Typography mb={3} textAlign="center" variant="h2">
          {" "}
          Music{" "}
        </Typography>
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
