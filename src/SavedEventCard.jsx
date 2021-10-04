import { useState } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

function SavedEventCard({
  event,
  user,
  setSavedEvents,
  savedEvents,
  updateNotifications,
}) {
  const classes = useStyles();
  console.log(event);

  const [notificationHours, setNotificationHours] = useState(24);
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(notificationHours);
    async function createNotification() {
      let res = await fetch("/server/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hours_before: notificationHours,
          saved_event_id: event.id,
        }),
      });
      let data = await res.json();
      console.log(data);
      let updatedEvents = savedEvents.map((savedEvent) => {
        if (savedEvent.id === event.id && event.notifications) {
          event.notifications.push(data);
          return event;
        } else if (savedEvent.id === event.id) {
          event.notifications = [data];
          return event;
        } else {
          return savedEvent;
        }
      });
      console.log(updatedEvents);
      setSavedEvents(updatedEvents);
    }
    createNotification();
  }

  console.log(event.id);

  if (user) {
    return (
      <Grid item key={event.link}>
        <Card
          variant="outlined"
          className={classes.root}
          elevation={2}
          key={event.link}
        >
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
          {event.notifications.length > 0
            ? event.notifications.map((n) => {
                return (
                  <div>
                    Notification for {n.hours_before} hours before event.
                  </div>
                );
              })
            : null}
          <form onSubmit={handleSubmit}>
            <label htmlFor="notifications"> Get Notification: </label>
            <select
              name="notification"
              id="notification"
              onChange={(e) => setNotificationHours(e.target.value)}
            >
              <option value={24}>1 day before</option>
              <option value={48}>2 days before</option>
              <option value={72}>3 days before</option>
            </select>
            <button type="submit">Submit</button>
          </form>
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
