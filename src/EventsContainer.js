import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Grid from "@material-ui/core/Grid";

function EventsContainer({ user, events }) {
  if (user) {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing="6"
      >
        {events.map((event) => {
          return <EventCard user={user} event={event} />;
        })}
      </Grid>
    );
  } else {
    return <h1>Page Rendering</h1>;
  }
}

export default EventsContainer;
