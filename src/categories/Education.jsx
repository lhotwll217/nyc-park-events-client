import EventCard from "../EventCard";
import { Grid, Typography } from "@mui/material";

function Education({ user, events }) {
  let educationEvents = events.filter((event) =>
    event.categories.toLowerCase().includes("education")
  );

  if (educationEvents) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Typography mb={3} textAlign='center' variant='h2'>
          {" "}
          Education{" "}
        </Typography>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={6}
          mt='20'
        >
          {educationEvents.map((event) => {
            return <EventCard key={event.link} event={event} user={user} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default Education;
