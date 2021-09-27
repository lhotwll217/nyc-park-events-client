import { useState, useEffect } from "react";
import EventsContainer from "./EventsContainer";

function SavedEvents({ user }) {
  const [savedEvents, setSavedEvents] = useState(null);

  useEffect(() => {
    async function savedEventsFetch() {
      let res = await fetch("/server/saved_events");
      if (res.ok) {
        let data = await res.json();
        setSavedEvents(data);
      } else {
        console.log(res.errors);
      }
    }
    savedEventsFetch();
  }, []);

  if (savedEvents) {
    return (
      <EventsContainer
        setSavedEvents={setSavedEvents}
        user={user}
        savedEvents={savedEvents}
      />
    );
  } else {
    return <h1>Rendering</h1>;
  }
}

export default SavedEvents;
