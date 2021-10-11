import EventCard from "./EventCard";
import Grid from "@mui/material/Grid";

function History({ user, events }) {
  let historyEvents = events.filter(
    (event) =>
      event.categories.toLowerCase().includes("history") ||
      event.title.toLowerCase().includes("history")
  );

  if (historyEvents) {
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
          {historyEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default History;
