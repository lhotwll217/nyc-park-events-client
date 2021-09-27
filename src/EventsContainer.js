import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Grid from "@material-ui/core/Grid";
import SavedEventCard from "./SavedEventCard";

function EventsContainer({ user, events, setSavedEvents, savedEvents }) {
  if (user) {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing="6"
      >
        {events
          ? events.map((event) => {
              return <EventCard user={user} event={event} />;
            })
          : savedEvents.map((event) => {
              return (
                <SavedEventCard
                  savedEvents={savedEvents}
                  setSavedEvents={setSavedEvents}
                  user={user}
                  event={event}
                />
              );
            })}
      </Grid>
    );
  } else {
    return <h1>Page Rendering</h1>;
  }
}

export default EventsContainer;
