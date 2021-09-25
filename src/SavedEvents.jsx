import {useState, useEffect} from "react"
import EventsContainer from "./EventsContainer";

function SavedEvents() {
    const [savedEvents, setSavedEvents] = useState(null)
    
    useEffect(() => {
        async function savedEventsFetch() {
            let res = await fetch('/server/saved_events');
            if (res.ok) {
            let data = await res.json()
            setSavedEvents(data)}
            else {
                console.log(res.errors)
            }
        }
        savedEventsFetch()

    },[])

    return <h1>Saved Events</h1>
}

export default SavedEvents