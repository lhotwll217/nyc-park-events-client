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
        borderRadius: 35,
        backgroundColor: "white",
        padding: "5px 12px",
        fontSize: "1rem",
        fontWeight: "700",
      }}
      onClick={logOutClick}
      variant="text"
    >
      Logout
    </Button>
  );
}

export default Logout;
