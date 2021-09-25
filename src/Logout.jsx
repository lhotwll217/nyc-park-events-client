import { useHistory } from "react-router-dom";

function Logout({ onLogout }) {
  const history = useHistory();
  async function logOutClick() {
    let res = await fetch("/server/logout", {
      method: "DELETE",
    });
    if (res.ok) {
      onLogout();
      history.push("/");
    }
  }

  return <button onClick={logOutClick}>Logout</button>;
}

export default Logout;
