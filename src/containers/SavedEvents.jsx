import { useState, useEffect } from "react";
import SavedEventCard from "../components/SavedEventCard";
import { Grid, Typography } from "@mui/material";

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

  if (savedEvents?.length > 0) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "150px" }}>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
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
    return (
      <div style={{ marginTop: "100px", marginLeft: "150px" }}>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={6}
        >
          <Grid item>
            <Typography
              // ml={37}
              // width="50%"
              mt={20}
              textAlign='center'
              variant='h4'
            >
              Save Events To View & Create/Edit Notifications Here!
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SavedEvents;
