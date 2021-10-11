import EventCard from "./EventCard";
import Grid from "@mui/material/Grid";

function Art({ user, events }) {
  let artEvents = events.filter(
    (event) =>
      event.categories.toLowerCase().includes("art") ||
      event.title.toLowerCase().includes("art")
  );

  if (artEvents) {
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
          {artEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default Art;
