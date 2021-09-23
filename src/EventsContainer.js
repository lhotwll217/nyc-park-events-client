import { useEffect, useState } from "react";
import EventCard from "./EventCard";

function EventsContainer() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let date = new Date();
    let isoDate = date.toISOString();

    async function eventFetch() {
      let res = await fetch(
        `https://data.cityofnewyork.us/resource/fudw-fgrp.json?$limit=75000`
      );
      let data = await res.json();
      console.log(data);
      let sortedData = await data.sort(function (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
      });

      setEvents(sortedData);
    }

    eventFetch();
  }, []);

  // useEffect(() => {
  //   async function eventFetch() {
  //     let res = await fetch(
  //       `https://data.cityofnewyork.us/resource/fudw-fgrp.json`
  //     );
  //     let data = await res.json();
  //     console.log(data);
  //     // let sortedData = await data.sort(function (a, b) {
  //     //   return Date.parse(a.date) - Date.parse(b.date);
  //     // });

  //     setEvents(data);
  //   }

  //   eventFetch();
  // }, []);

  return (
    <div>
      {events.map((event) => {
        return <EventCard event={event} />;
      })}
    </div>
  );
}

export default EventsContainer;
