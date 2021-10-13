import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import DeleteIcon from "@mui/icons-material/Delete";
import Popover from "@mui/material/Popover";
import { Phone } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";

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
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    objectFit: "cover",
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

function SavedEventCard({ savedEvent, user, setSavedEvents, savedEvents }) {
  const classes = useStyles();
  console.log(savedEvent);
  const [categoriesWrap, setCategoriesWrap] = useState(true);
  const [notificationHours, setNotificationHours] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [errors, setErrors] = useState(null);

  const openPopover = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function deleteNotificationClick(id) {
    fetch(`/server/notifications/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const updatedNotifications = savedEvent.notifications.filter(
          (n) => n.id !== id
        );
        savedEvent.notifications = updatedNotifications;
        console.log(savedEvent);
        let updatedEvent = savedEvent;
        let updatedEvents = savedEvents.map((e) => {
          if (e.id === updatedEvent.id) {
            return updatedEvent;
          } else {
            return e;
          }
        });
        setSavedEvents(updatedEvents);
      }
    });
  }

  function deleteEventClick() {
    fetch(`/server/saved_events/${savedEvent.id}`, {
      method: "DELETE",
    });
    const updatedEvents = savedEvents.filter(
      (event) => event.id !== savedEvent.id
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
          days_before: notificationHours,
          saved_event_id: savedEvent.id,
          user_id: user.id,
        }),
      });

      if (res.ok) {
        let data = await res.json();
        console.log(data);
        let updatedEvents = savedEvents.map((event) => {
          if (event.id === savedEvent.id && savedEvent.notifications) {
            event.notifications.push(data);
            return event;
          } else if (event.id === savedEvent.id) {
            event.notifications = [data];
            return event;
          } else {
            return event;
          }
        });
        console.log(updatedEvents);
        setSavedEvents(updatedEvents);
      } else {
        let data = await res.json();
        setErrors(data.errors);
      }
    }
    createNotification();
  }

  if (user) {
    return (
      <Grid item>
        <Card
          variant="outlined"
          className={classes.root}
          elevation={2}
          key={savedEvent.event.link}
        >
          <Typography variant="h5" m={2}>
            <strong>{savedEvent.event.title}</strong>
          </Typography>
          {savedEvent.event.image && (
            <CardMedia
              component="img"
              className={classes.media}
              height="200"
              image={savedEvent.event.image}
              title="savedEvent.event.title"
            />
          )}
          <Typography m={2} fontSize="1.2rem" fontWeight="600">
            {moment(savedEvent.event.start_date_time).format("MMMM Do")}
            <Typography fontSize="1rem" fontWeight="400">
              {moment(savedEvent.event.start_date_time)
                .utcOffset(-4)
                .format("h:mm a")}{" "}
              -{" "}
              {moment(savedEvent.event.end_date_time)
                .utcOffset(-4)
                .format("h:mm a")}
            </Typography>
          </Typography>
          <Typography fontSize="1rem" fontWeight="300" ml={2} mb={1}>
            {savedEvent.event.location}
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
            {savedEvent.event.categories}
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
            <IconButton
              href={savedEvent.event.link}
              styles={{ marginLeft: "5px" }}
              color="success"
            >
              <InfoIcon ml={2} />
            </IconButton>
            {savedEvent.event.contact_phone && (
              <IconButton onClick={openPopover}>
                <Phone />
              </IconButton>
            )}
            <Popover
              // id={id}
              open={Boolean(anchor)}
              onClose={() => setAnchor(null)}
              anchorEl={anchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              style={{ zIndex: "1500" }}
            >
              <div
                style={{
                  padding: "5px",
                  border: "3px",
                  borderColor: "blueviolet",
                }}
              >
                <Typography fontsize="1.4rem" fontWeight="700">
                  {" "}
                  {savedEvent.event.contact_phone}
                </Typography>
              </div>
            </Popover>

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
              {errors && (
                <div style={{ color: "red" }}>
                  {errors.map((error) => (
                    <Typography
                      key={error}
                      fontSize=".875rem"
                      style={{ maxWidth: "300px", margin: "2px" }}
                    >
                      {error}
                    </Typography>
                  ))}
                </div>
              )}

              {savedEvent.notifications
                ? savedEvent.notifications.map((n) => {
                    return (
                      <Typography
                        fontSize=".9rem"
                        fontWeight="600"
                        textAlign="center"
                      >
                        {n.days_before} days before.{" "}
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
                  <option value={1}>1 day before</option>
                  <option value={2}>2 days before</option>
                  <option value={3}>3 days before</option>
                </select>
                <IconButton color="success" type="submit">
                  <AddAlertIcon />
                </IconButton>
              </form>
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
