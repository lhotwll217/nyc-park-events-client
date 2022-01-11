import {useState} from "react";
import {useHistory} from "react-router-dom";
import {Button, TextField, Grid, Card, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 325,
    maxWidth: 325,
    padding: "35px",

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
function ProfileForm({user, setUser}) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const history = useHistory();
  const [errors, setErrors] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    fetch("/server/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        address,
        user_id: user.id,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          let updatedUser = user;
          updatedUser.profile = data;
          setUser(updatedUser);
        });
        history.push("/");
      } else {
        r.json().then((data) => setErrors(data.errors));
      }
    });
  }

  return (
    <div style={{display: "block", marginTop: "100px"}}>
      <Grid item>
        <Card variant='outlined' className={classes.root}>
          <Typography textAlign='center' fontSize='1.6rem' fontWeight='600'>
            User Info
          </Typography>
          {errors && (
            <div style={{color: "red"}}>
              {errors.map((error) => (
                <Typography
                  key={error}
                  fontSize='.875rem'
                  style={{maxWidth: "300px", margin: "2px"}}
                >
                  {error}
                </Typography>
              ))}
            </div>
          )}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 350,
              minWidth: 300,
            }}
            onSubmit={(e) => handleSubmit(e)}
          >
            <TextField
              label='First Name'
              margin='normal'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label='Address'
              margin='normal'
              onChange={(e) => setAddress(e.target.value)}
            />

            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </form>
        </Card>
      </Grid>
    </div>
  );
}

export default ProfileForm;
