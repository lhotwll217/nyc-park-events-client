import { useState, useEffect } from "react";
import SavedEventCard from "./SavedEventCard";
import Grid from "@mui/material/Grid";

function SavedEvents({ user }) {
  const [savedEvents, setSavedEvents] = useState(null);

  useEffect(() => {
    async function savedEventsFetch() {
      let res = await fetch("/server/saved_events");
      if (res.ok) {
        let data = await res.json();
        setSavedEvents(data);
      } else {
        console.log(res.errors);
      }
    }
    savedEventsFetch();
  }, []);

  if (savedEvents) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "150px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}
        >
          {savedEvents.map((savedEvent) => {
            return (
              <SavedEventCard
                key={savedEvent.id}
                savedEvents={savedEvents}
                setSavedEvents={setSavedEvents}
                user={user}
                savedEvent={savedEvent}
              />
            );
          })}
        </Grid>
      </div>
    );
  } else {
    return <h1>Rendering</h1>;
  }
}

export default SavedEvents;
