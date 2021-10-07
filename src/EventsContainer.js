import EventCard from "./EventCard";
import Grid from "@material-ui/core/Grid";
import SavedEventCard from "./SavedEventCard";
import { v4 as uuidv4 } from "uuid";

function EventsContainer({ user, events, setSavedEvents, savedEvents }) {
  if (user) {
    return (
      //marginLeft was 200
      <div style={{ marginTop: "100px", marginLeft: "150px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}
        >
          {events
            ? events.map((event) => {
                return <EventCard key={uuidv4()} user={user} event={event} />;
              })
            : savedEvents.map((event) => {
                return (
                  <SavedEventCard
                    key={event.id}
                    savedEvents={savedEvents}
                    setSavedEvents={setSavedEvents}
                    user={user}
                    event={event}
                  />
                );
              })}
        </Grid>
      </div>
    );
  } else {
    return <h1 style={{ marginTop: "50px" }}>Page Rendering</h1>;
  }
}

export default EventsContainer;
