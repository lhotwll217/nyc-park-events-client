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
    <Button
      style={{
        borderRadius: 5,
        backgroundColor: "white",
        padding: "5px 7px",
        fontSize: ".9rem",
        fontWeight: "300",
      }}
      onClick={logOutClick}
      variant="text"
    >
      Logout
    </Button>
  );
}

export default Logout;
