import EventCard from "./EventCard";
import { Grid, Typography } from "@mui/material";

function Film({ user, events }) {
  let filmEvents = events.filter(
    (event) =>
      event.categories.toLowerCase().includes("film") ||
      event.title.toLowerCase().includes("film") ||
      event.title.toLowerCase().includes("movie") ||
      event.categories.toLowerCase().includes("movie")
  );

  if (filmEvents) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Typography mb={3} textAlign="center" variant="h2">
          {" "}
          Film{" "}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}
          mt="20"
        >
          {filmEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default Film;
