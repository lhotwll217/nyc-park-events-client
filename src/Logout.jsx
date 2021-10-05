import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

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

  return (
    <Button color="secondary" onClick={logOutClick} variant="contained">
      Logout
    </Button>
  );
}

export default Logout;
