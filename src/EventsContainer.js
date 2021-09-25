import { useEffect, useState } from "react";
import EventCard from "./EventCard";

function EventsContainer({ user, events }) {
  if (user) {
    return (
      <div>
        {events.map((event) => {
          return <EventCard user={user} event={event} />;
        })}
      </div>
    );
  } else {
    return <h1>Page Rendering</h1>;
  }
}

export default EventsContainer;
