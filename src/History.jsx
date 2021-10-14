import EventCard from "./EventCard";
import { Grid, Typography } from "@mui/material";

function History({ user, events }) {
  let historyEvents = events.filter(
    (event) =>
      event.categories.toLowerCase().includes("history") ||
      event.title.toLowerCase().includes("history")
  );

  if (historyEvents) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Typography mb={3} textAlign="center" variant="h2">
          {" "}
          History{" "}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}
          mt="20"
        >
          {historyEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default History;
