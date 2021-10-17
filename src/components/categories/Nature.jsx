import EventCard from "../EventCard";
import { Grid, Typography } from "@mui/material";

function Nature({ user, events }) {
  let natureEvents = events.filter(
    (event) =>
      event.categories.toLowerCase().includes("nature") ||
      event.title.toLowerCase().includes("nature") ||
      event.title.toLowerCase().includes("wildlife") ||
      event.categories.toLowerCase().includes("wildlife")
  );

  if (natureEvents) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Typography mb={3} textAlign='center' variant='h2'>
          {" "}
          Nature{" "}
        </Typography>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={6}
          mt='20'
        >
          {natureEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default Nature;
