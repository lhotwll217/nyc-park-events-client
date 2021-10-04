import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
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
      <Typography variant="h5">Categories</Typography>
      <List>
        <ListItem button component={NavLink} to="/">
          <ListItemText> Home </ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/sports">
          <ListItemText> Sports </ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/seniors">
          <ListItemText> Seniors </ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/education">
          <ListItemText> Education </ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/kids_youth">
          <ListItemText> Kids/Youth </ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/fitness">
          <ListItemText> Fitness </ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/dance">
          <ListItemText> Dance </ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/art">
          <ListItemText> Art </ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/music">
          <ListItemText> Music </ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/film">
          <ListItemText> Film </ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/nature">
          <ListItemText> Nature </ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/history">
          <ListItemText> History </ListItemText>
        </ListItem>
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
