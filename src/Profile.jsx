import ProfileView from "./ProfileView";
import ProfileForm from "./ProfileForm";

function Profile({ user, setUser }) {
  if (user.profile) {
    return <ProfileView user={user} setUser={setUser} />;
  } else {
    return <ProfileForm user={user} setUser={setUser} />;
  }
}

export default Profile;
