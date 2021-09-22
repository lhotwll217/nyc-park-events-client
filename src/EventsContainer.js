import { useEffect, useState } from "react";
import EventCard from "./EventCard";

function EventsContainer() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function eventFetch() {
      let res = await fetch(
        "https://data.cityofnewyork.us/resource/fudw-fgrp.json"
      );
      let data = await res.json();

      setEvents(data.slice(0, 5));
    }

    eventFetch();
  }, []);

  return (
    <div>
      {events.map((event) => {
        return <EventCard event={event} />;
      })}
    </div>
  );
}

export default EventsContainer;
