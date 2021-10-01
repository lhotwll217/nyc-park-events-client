import { useState } from "react";
function ProfileView({ user, setUser }) {
  const [openNameInput, setOpenNameInput] = useState(false);
  const [openAddressInput, setOpenAddressInput] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState(user.profile.first_name);
  const [userAddress, setUserAddress] = useState(user.profile.address);

  console.log(user);

  function updateFirstName(e) {
    e.preventDefault();

    fetch("/server/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ first_name: firstName, user_id: user.id }),
    })
      .then((r) => r.json())
      .then((data) => {
        let updatedUser = user;
        updatedUser.profile.first_name = data.first_name;
        setUser(updatedUser);
        setUserName(data.first_name);
      })
      .then(setOpenNameInput(!openNameInput));
  }

  function updateAddress(e) {
    e.preventDefault();
    fetch("/server/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ address, user_id: user.id }),
    })
      .then((r) => r.json())
      .then((data) => {
        let updatedUser = user;
        updatedUser.profile.address = data.address;
        setUser(updatedUser);
        setUserAddress(data.address);
      })
      .then(setOpenAddressInput(!openAddressInput));
  }

  if (user.profile) {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <h1>Profile</h1>
        <h2>{userName}</h2>
        <button onClick={() => setOpenNameInput(!openNameInput)}>
          Edit First Name
        </button>
        {openNameInput && (
          <form onSubmit={updateFirstName}>
            <input
              type="text"
              id="editFirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        )}
        <h3>{userAddress}</h3>
        <button onClick={() => setOpenAddressInput(!openAddressInput)}>
          Edit Address
        </button>
        {openAddressInput && (
          <form onSubmit={updateAddress}>
            <input
              type="text"
              id="editAddress"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default ProfileView;
