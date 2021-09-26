import EventsContainer from "./EventsContainer";
import { useEffect, useState } from "react";
import moment from "moment";

function Events({ user }) {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    async function eventFetch() {
      let res = await fetch("/api");
      let data = await res.json();
      console.log(data);
      let events = data.filter(
        (a) => a.startdate >= moment(new Date()).format("YYYY-MM-DD")
      );
      console.log(events);
      let filteredEvents = events.filter(
        (event) =>
          event.startdate != moment(new Date()).format("YYYY-MM-DD") ||
          new Date(moment(event.endtime, "hh:mm a").format()) - new Date() > 0
      );
      console.log(filteredEvents);
      setEvents(filteredEvents);
      console.log(new Date(events[0].startdate));
    }
    eventFetch();
  }, []);

  if (events) {
    return <EventsContainer user={user} events={events} />;
  } else {
    return <h1>Rendering</h1>;
  }
}
export default Events;
