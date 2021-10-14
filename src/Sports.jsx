import EventCard from "./EventCard";
import { Grid, Typography } from "@mui/material";

function Sports({ user, events }) {
  let sportsEvents = events.filter((event) =>
    event.categories.toLowerCase().includes("sports")
  );

  console.log(sportsEvents);

  if (sportsEvents) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Typography mb={3} textAlign="center" variant="h2">
          {" "}
          Sports{" "}
        </Typography>
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
