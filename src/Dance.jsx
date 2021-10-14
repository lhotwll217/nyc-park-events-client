import EventCard from "./EventCard";
import { Grid, Typography } from "@mui/material";

function Dance({ user, events }) {
  let danceEvents = events.filter(
    (event) =>
      event.categories.toLowerCase().includes("dance") ||
      event.categories.toLowerCase().includes("dance")
  );

  if (danceEvents) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Typography mb={3} textAlign="center" variant="h2">
          {" "}
          Dance{" "}
        </Typography>
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
