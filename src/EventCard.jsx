


function EventCard({event, user}) {

    function saveEventButton() {
        console.log(Object.keys(user).length)
        if (Object.keys(user).length > 0) {
            console.log(user);
            async function createUser(){
                let res = await fetch("/server/save_event", {
                    method: "POST",
                    headers: {"Content-Type" : "application/json",},
                    body: JSON.stringify({
                        categories: event.categories,
                        contact_phone: event.contact_phone,
                        coordinates: event.coordinates,
                        description: event.description,
                        end_date: event.enddate,
                        end_time: event.endtime,
                        guide: event.guid,
                        image: event.image,
                        link: event.link,
                        location: event.location,
                        park_ids: event.parkids,
                        park_names: event.parknames,
                        start_date: event.startdate,
                        start_time: event.starttime,
                        title: event.title,
                        user_id: user.id
                    })
                });
                let data = await res.json();
                console.log(data)
            };
            createUser()

        } else {
            console.log("No User!")
        }
        



    }

    function createMarkup() {
        return {__html: event.description};
      }

      if (user) {
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
    )} else { return <h1>Rendering</h1>}
}

export default EventCard