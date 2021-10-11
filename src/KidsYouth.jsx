import EventCard from "./EventCard";
import Grid from "@mui/material/Grid";

function KidsYouth({ user, events }) {
  let kidsYouthEvents = events.filter(
    (event) =>
      event.categories.toLowerCase().includes("kids") ||
      event.categories.toLowerCase().includes("youth") ||
      event.categories.toLowerCase().includes("teen")
  );

  if (kidsYouthEvents) {
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
          {kidsYouthEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default KidsYouth;
