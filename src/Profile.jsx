import ProfileView from "./ProfileView";
import ProfileForm from "./ProfileForm";
import Grid from "@mui/material/Grid";

function Profile({ user, setUser }) {
  return (
    <div style={{ marginTop: "75px", marginRight: "20px" }}>
      <Grid
        item
        container
        xs={12}
        sm={6}
        style={{ padding: 10, maxWidth: "100%" }}
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        {user.profile ? (
          <ProfileView user={user} setUser={setUser} />
        ) : (
          <ProfileForm user={user} setUser={setUser} />
        )}
      </Grid>
    </div>
  );
}

export default Profile;
