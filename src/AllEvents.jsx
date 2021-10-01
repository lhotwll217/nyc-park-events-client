import EventsContainer from "./EventsContainer";
import { useEffect, useState } from "react";
import moment from "moment";

function AllEvents({ user, events }) {
  if (events.length > 0) {
    return <EventsContainer user={user} events={events} />;
  } else {
    return <h1 style={{ marginTop: "50px" }}>No Matching Events</h1>;
  }
}
export default AllEvents;
