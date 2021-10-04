import AllEvents from "./AllEvents";

function Home(props) {
  console.log(props.user.profile);

  if (props.user) {
    return (
      <div>
        <AllEvents events={props.events} user={props.user} />
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default Home;
