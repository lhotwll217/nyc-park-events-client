


function EventCard({event}) {
    return (

    <div style= {{width: "50%", margin: "200px"}}>
        <h3>{event.title}</h3>
        <h4>{event.startdate}</h4>
        <h5>{event.location}</h5>
        <h5>{event.starttime} - {event.endtime}</h5>
    </div>
    )
}

export default EventCard