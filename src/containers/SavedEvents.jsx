import {useState, useEffect} from "react";
import SavedEventCard from "../components/SavedEventCard";
import {Grid, Typography} from "@mui/material";
import InitialLoading from "components/InitialLoading";

function SavedEvents({user}) {
  const [savedEvents, setSavedEvents] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(savedEvents);

  useEffect(() => {
    async function savedEventsFetch() {
      setLoading(true);
      let res = await fetch("/server/saved_events");
      if (res.ok) {
        let data = await res.json();
        setSavedEvents(data);
        setLoading(false);
      } else {
        console.log(res.errors);
      }
    }
    savedEventsFetch();
  }, []);

  if (loading) {
    return <InitialLoading />;
  }

  if (savedEvents?.length < 1) {
    return (
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
    );
  }

  return (
    <div style={{marginTop: "100px", marginLeft: "150px"}}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={6}
      >
        {savedEvents?.map((savedEvent) => {
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
}

export default SavedEvents;
