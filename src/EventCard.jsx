


function EventCard({event, user}) {

    function saveEventButton() {
        if (user.length > 0) {
            console.log(user)
        } else {
            console.log("No User!")
        }
        



    }

    function createMarkup() {
        return {__html: event.description};
      }

    return (

    <div style= {{backgroundColor: "black", width: "50%", marginLeft: "200px"}}>
        <h3>{event.title}</h3>
        <h6>{event.categories}</h6>
        <a href={event.link}>Event Link </a>
        <h6>{event.coordinates}</h6>
        <h4>{event.startdate}</h4>
        <div dangerouslySetInnerHTML={createMarkup(event.description)} />
        { event.guid && <h6> Guide : {event.guid}</h6>}
        { event.image && <img src={event.image}/>}
        <h6>Park ID: {event.parkids}</h6>

        {event.contact_phone && <h6>Contact Phone: {event.contact_phone}</h6>}
        <h5>{event.location}</h5>
        <h5>{event.starttime} - {event.endtime}</h5>
        <button onClick={saveEventButton}>Save Event</button>
    </div>
    )
}

export default EventCard