


function EventCard({event}) {
    return (

    <div style= {{width: "50%", margin: "200px"}}>
        <h3>{event.title}</h3>
        <h4>{event.date}</h4>
        <h5>{event.location_description}</h5>
        <h5>{event.start_time} - {event.end_time}</h5>
    </div>
    )
}

export default EventCard