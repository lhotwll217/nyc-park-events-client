import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@material-ui/core/CardContent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Button {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles({
  root: {
    minWidth: 325,
    maxWidth: 325,
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
  const [categoriesWrap, setCategoriesWrap] = useState(true);
  const [notificationHours, setNotificationHours] = useState(24);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function deleteNotificationClick(id) {
    fetch(`/server/notifications/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const updatedNotifications = event.notifications.filter(
          (n) => n.id !== id
        );
        event.notifications = updatedNotifications;
        console.log(event);
        let updatedEvent = event;
        let updatedEvents = savedEvents.map((e) => {
          if (e.id === updatedEvent.id) {
            return updatedEvent;
          } else {
            return e;
          }
        });
        setSavedEvents(updatedEvents);
        // setSavedEvents(updatedEvent);
      }
    });
  }

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
      <Grid item>
        <Card
          variant="outlined"
          className={classes.root}
          elevation={2}
          key={event.link}
        >
          <Typography variant="h5" m={2}>
            <strong>{event.title}</strong>
          </Typography>
          {event.image && (
            <CardMedia
              component="img"
              className={classes.media}
              height="200"
              image={event.image}
              title="event.title"
            />
          )}
          <Typography m={2} fontSize="1.2rem" fontWeight="600">
            {moment(event.startdate).format("MMMM Do")} , {event.start_time} -{" "}
            {event.end_time}
          </Typography>
          <Typography fontSize="1rem" fontWeight="300" ml={2} mb={1}>
            {event.location}
          </Typography>
          <div style={{ display: "inline" }}>
            <Typography fontSize=".9rem" textAlign="center" fontWeight="600">
              Categories
              <IconButton onClick={() => setCategoriesWrap(!categoriesWrap)}>
                <AddCircleIcon />
              </IconButton>
            </Typography>
          </div>
          <Typography mx={1} fontSize=".9rem" noWrap={categoriesWrap}>
            {event.categories}
          </Typography>

          <CardActions disableSpacing>
            <div>
              <Button
                color="error"
                endIcon={<DeleteIcon />}
                onClick={deleteEventClick}
              >
                Delete
              </Button>
            </div>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              endIcon={<AddAlertIcon />}
            >
              Notifications
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {event.notifications.length > 0
                ? event.notifications.map((n) => {
                    return (
                      <Typography
                        fontSize=".9rem"
                        fontWeight="600"
                        textAlign="center"
                      >
                        {n.hours_before} hours before.{" "}
                        <IconButton
                          onClick={() => deleteNotificationClick(n.id)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Typography>
                    );
                  })
                : null}
              <form onSubmit={handleSubmit} style={{ marginLeft: "82px" }}>
                <select
                  name="notification"
                  id="notification"
                  onChange={(e) => setNotificationHours(e.target.value)}
                >
                  <option value={24}>1 day before</option>
                  <option value={48}>2 days before</option>
                  <option value={72}>3 days before</option>
                </select>
                <IconButton color="success" type="submit">
                  <AddAlertIcon />
                </IconButton>
              </form>

              <a href={event.link}>Event Link </a>
              {/* <h6>{event.coordinates}</h6> */}

              {/* <div dangerouslySetInnerHTML={createMarkup(event.description)} /> */}
              {/* {event.guid && <h6> Guide : {event.guid}</h6>} */}

              {/* <h6>Park ID: {event.parkids}</h6> */}

              {event.contact_phone && (
                <h6>Contact Phone: {event.contact_phone}</h6>
              )}
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    );
  } else {
    return <h1>Rendering</h1>;
  }
}

export default SavedEventCard;
