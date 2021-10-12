import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 150;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    zIndex: "1400",
    marginTop: "60px",
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: "1400",
    top: "unset",
    marginTop: "80px",
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
      <img
        style={{
          marginLeft: "28px",
          marginBottom: "10px",
        }}
        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg/800px-Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg.png"
        width={90}
        alt="NYC Parks and Rec"
      />
      <input
        onChange={(e) => handleCategorySearch(e.target.value)}
        type="text"
        placeholder="Search By Category"
        style={{ width: "120px", marginLeft: "auto", marginRight: "auto" }}
      />
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
    </Drawer>
  );
}

export default LoggedInDrawer;
