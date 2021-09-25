import EventsContainer from "./EventsContainer";
import {useEffect, useState} from "react"



function Events({user}) {

    const [events, setEvents] = useState(null);

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
    
        if (events) {
        return ( 
        <EventsContainer user={user} events={events}/>
        )
        } else {
            return <h1>Rendering</h1>
        }
    

}
export default Events