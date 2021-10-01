import { useState } from "react";
import { useHistory } from "react-router-dom";
function ProfileForm({ user, setUser }) {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const history = useHistory();
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
    })
      .then((r) => r.json())
      .then((data) => {
        let updatedUser = user;
        updatedUser.profile = data;
        setUser(updatedUser);
      });
    history.push("/");
  }

  return (
    <div style={{ display: "block", marginTop: "100px", marginLeft: "200px" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          style={{ display: "block" }}
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          style={{ display: "block" }}
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;
