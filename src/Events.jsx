import EventsContainer from "./EventsContainer";
import { useEffect, useState } from "react";

function Events({ user }) {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    async function eventFetch() {
      let res = await fetch("/api");
      let data = await res.json();
      console.log(data);
      let events = data.filter((a) => new Date(a.startdate) - new Date() > 0);
      // let sortedData = await data.sort(function (a, b) {
      //   return a.startdate - b.startdate;
      // });
      //   let times = events.map((event) => {
      //       if (event.endtime.split(" ").includes("pm")) {
      //           console.log
      //       }
      //   })

      setEvents(events);
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
