import { useEffect, useState } from "react";
import EventCard from "./EventCard";

function EventsContainer({ user }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function eventFetch() {
      let res = await fetch("/api");
      let data = await res.json();
      console.log(data);
      // let sortedData = await data.sort(function (a, b) {
      //   return a.startdate - b.startdate;
      // });

      setEvents(data);
    }

    eventFetch();
  }, []);

  return (
    <div>
      {events.map((event) => {
        return <EventCard user={user} event={event} />;
      })}
    </div>
  );
}

export default EventsContainer;
