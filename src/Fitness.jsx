import EventCard from "./EventCard";
import { Grid, Typography } from "@mui/material";

function Fitness({ user, events }) {
  let fitnessEvents = events.filter((event) =>
    event.categories.toLowerCase().includes("fitness")
  );

  if (fitnessEvents) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Typography mb={3} textAlign="center" variant="h2">
          {" "}
          Fitness{" "}
        </Typography>
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
