import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardContent from "@material-ui/core/CardContent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import moment from "moment";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import ExploreIcon from "@mui/icons-material/Explore";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Phone } from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(270deg)",
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
  const [expanded, setExpanded] = useState(false);
  const [categoriesWrap, setCategoriesWrap] = useState(true);
  const [anchor, setAnchor] = useState(null);

  const openPopover = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          <Typography variant="h5" m={2}>
            <strong>{event.title}</strong>
          </Typography>

          {event.image && (
            <CardMedia
              component="img"
              className={classes.media}
              height="200"
              image={event.image}
              title={event.title}
            />
          )}
          {/* {event.image && <img src={event.image} alt={event.title} />} */}
          {event.startdate ? (
            <Typography m={2} fontSize="1.2rem" fontWeight="600">
              {moment(event.startdate).format("MMMM Do")}
              <Typography fontSize="1rem" fontWeight="400">
                {event.starttime} - {event.endtime}{" "}
              </Typography>
            </Typography>
          ) : (
            <Typography m={2} fontSize="1.2rem" fontWeight="600">
              {startdate}, {event.starttime} - {event.endtime}
            </Typography>
          )}

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
            <Button
              onClick={saveEventButton}
              variant="outlined"
              startIcon={<AddCircleIcon />}
            >
              Save
            </Button>
            <IconButton
              href={event.link}
              styles={{ marginLeft: "5px" }}
              color="success"
            >
              <InfoIcon ml={2} />
            </IconButton>
            {event.contact_phone && (
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
                  {event.contact_phone}
                </Typography>
              </div>
            </Popover>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExploreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <CardMedia
                component="img"
                height="200"
                image="https://i.insider.com/5c61cecf2628981bd4585b4a?width=1000&format=jpeg&auto=webp"
                title={event.title}
              />
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    );
  } else {
    return <h1>Rendering</h1>;
  }
}

export default EventCard;
