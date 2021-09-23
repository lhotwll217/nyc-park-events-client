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
      console.log(data);
      let sortedData = await data.sort(function (a, b) {
        return Date.parse(a.date) - Date.parse(b.date);
      });

      setEvents(sortedData);
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
