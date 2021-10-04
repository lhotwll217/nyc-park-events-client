import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 275,
    display: "inline-block",
    // padding: "12px",
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

function EventCard({ event, user, startdate }) {
  const classes = useStyles();
  function saveEventButton() {
    console.log(Object.keys(user).length);
    if (Object.keys(user).length > 0) {
      console.log(user);
      async function saveEvent() {
        let res = await fetch("/server/save_event", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            categories: event.categories,
            contact_phone: event.contact_phone,
            coordinates: event.coordinates,
            description: event.description,
            end_date: event.enddate,
            end_time: event.endtime,
            guide: event.guid,
            image: event.image,
            link: event.link,
            location: event.location,
            park_ids: event.parkids,
            park_names: event.parknames,
            start_date: event.startdate,
            start_time: event.starttime,
            title: event.title,
            user_id: user.id,
          }),
        });
        let data = await res.json();
        console.log(data);
      }
      saveEvent();
    } else {
      console.log("No User!");
    }
  }

  if (user) {
    return (
      <Grid item>
        <Card variant="outlined" className={classes.root} elevation={2}>
          <h3>{event.title}</h3>

          {event.image && (
            <CardMedia
              component="img"
              className={classes.media}
              height="200"
              image={event.image}
              title="event.title"
            />
          )}
          {/* {event.image && <img src={event.image} alt={event.title} />} */}
          {event.startdate ? <h4>{event.startdate}</h4> : <h4>{startdate}</h4>}
          <h5>
            {event.starttime} - {event.endtime}
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
            <button onClick={saveEventButton}>Save Event</button>
          </div>
        </Card>
      </Grid>
    );
  } else {
    return <h1>Rendering</h1>;
  }
}

export default EventCard;
