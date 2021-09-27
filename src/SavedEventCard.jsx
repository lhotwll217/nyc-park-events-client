import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 275,
    display: "inline-block",
    padding: "12px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SavedEventCard({ event, user, setSavedEvents, savedEvents }) {
  const classes = useStyles();
  //   const [deleteErrors, setDeleteErrors] = useState(null);

  function deleteEventClick() {
    fetch(`/server/saved_events/${event.id}`, {
      method: "DELETE",
    });
    const updatedEvents = savedEvents.filter(
      (savedEvent) => savedEvent.id !== event.id
    );
    setSavedEvents(updatedEvents);
  }

  console.log(event.id);

  function createMarkup() {
    return { __html: event.description };
  }

  if (user) {
    return (
      <Grid item>
        <Card variant="outlined" className={classes.root} elevation={2}>
          <h3>{event.title}</h3>
          {event.image && <img src={event.image} alt={event.title} />}
          <h4>{event.start_date}</h4>
          <h5>
            {event.start_time} - {event.end_time}
          </h5>
          <h5>{event.location}</h5>
          <h6>{event.categories}</h6>

          <a href={event.link}>Event Link </a>
          {/* <h6>{event.coordinates}</h6> */}

          {/* <div dangerouslySetInnerHTML={createMarkup(event.description)} /> */}
          {/* {event.guid && <h6> Guide : {event.guid}</h6>} */}

          {/* <h6>Park ID: {event.parkids}</h6> */}

          {event.contact_phone && <h6>Contact Phone: {event.contact_phone}</h6>}
          <div>
            <button onClick={deleteEventClick}>delete Event</button>
          </div>
        </Card>
      </Grid>
    );
  } else {
    return <h1>Rendering</h1>;
  }
}

export default SavedEventCard;
