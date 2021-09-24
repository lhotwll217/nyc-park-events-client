import EventsContainer from "./EventsContainer"


function Home({user}) {

    console.log(user)

    return (

        <div>
            <EventsContainer user={user}/>


        </div>
    )
}

export default Home