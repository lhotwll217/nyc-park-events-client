// FILTER
let eventsTimeFilter = events.filter((event) => {
  let endtime = new Date(moment(event.endtime, "h:mm a").format()).getTime();
  let now = new Date(moment().format()).getTime();

  let now = new Date(moment().format()).getTime();
  new Date(event.startdate) !== new Date() || endtime > now;
});
return eventsTimeFilter;

//MAP AS A FILTER

function filterPastEvents(events) {
  let filteredEvents = events.map((event) => {
    let eventDate = new Date(event.startdate);
    let today = new Date();

    let endtime = new Date(moment(event.endtime, "h:mm a").format()).getTime();
    let now = new Date(moment().format()).getTime();

    //   console.log(endtime);
    //   console.log(now);

    if (eventDate !== today) {
      return event;
    } else if (endtime > now) {
      return event;
    } else {
      return null;
    }

    return filteredEvents;
  });
}

//USING TIME
let filteredEvents = events.filter(
  (event) =>
    new Date(event.startdate) != new Date() ||
    new Date(moment(event.endtime, "h:mm a").format()) - new Date() > 0
);
console.log(filteredEvents);
