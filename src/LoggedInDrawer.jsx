import Drawer from "@material-ui/core/Drawer";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 150;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    zIndex: "1300",
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: "1300",
    top: "unset",
  },
});

function LoggedInDrawer({ handleCategorySearch }) {
  const classes = useStyles();
  return (
    <Drawer
      // className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      {" "}
      <div styles={{ paddingLeft: "10px" }}>
        <Typography align="center" variant="h5">
          <strong>Categories</strong>
        </Typography>
      </div>
      <List>
        <div style={{ fontWeight: "400" }}>
          <ListItem button component={NavLink} to="/">
            <ListItemText>
              <Typography>Home</Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/sports">
            <ListItemText>
              <Typography>Sports</Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/seniors">
            <ListItemText>
              {" "}
              <Typography>Seniors</Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/education">
            <ListItemText>
              {" "}
              <Typography>Education</Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/kids_youth">
            <ListItemText>
              {" "}
              <Typography>Kids/Youth</Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/fitness">
            <ListItemText>
              {" "}
              <Typography>Fitness</Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/dance">
            <ListItemText>
              {" "}
              <Typography>Dance</Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/art">
            <ListItemText>
              {" "}
              <Typography>Art</Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/music">
            <ListItemText>
              <Typography>Music</Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/film">
            <ListItemText>
              {" "}
              <Typography>Film</Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/nature">
            <ListItemText>
              {" "}
              <Typography>Nature</Typography>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/history">
            <ListItemText>
              {" "}
              <Typography>History</Typography>{" "}
            </ListItemText>
          </ListItem>
        </div>
      </List>
      <input
        onChange={(e) => handleCategorySearch(e.target.value)}
        type="text"
        placeholder="Search By Category"
        style={{ width: "120px", marginLeft: "auto", marginRight: "auto" }}
      />
    </Drawer>
  );
}

export default LoggedInDrawer;
