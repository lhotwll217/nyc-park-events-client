import AllEvents from "./AllEvents";
import { useEffect, useState } from "react";

function Home(props) {
  // useEffect(() => {
  //   if (props.user) {
  //     setUser(props.user);
  //   } else {
  //     setUser([]);
  //   }
  // }, [props.user]);

  if (props.user) {
    return (
      <div>
        {props.profile && (
          <h1 style={{ marginTop: "100px", marginLeft: "200px" }}>
            {" "}
            Welcome, {props.profile.first_name}!
          </h1>
        )}

        <AllEvents events={props.events} user={props.user} />
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default Home;
