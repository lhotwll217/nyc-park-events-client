import Events from "./Events";

function Home({ events, user }) {
  return (
    <div>
      <Events events={events} user={user} />
    </div>
  );
}

export default Home;
