const Moment = require("moment");
const array = [
  { date: "2018-05-11" },
  { date: "2018-05-12" },
  { date: "2018-05-10" },
];
const sortedArray = array.sort(
  (a, b) =>
    new Moment(a.date).format("YYYYMMDD") -
    new Moment(b.date).format("YYYYMMDD")
);
console.log(sortedArray);

let splitTime = event.endtime.split(" ")
let splitColon = splitTime.split(":")

let pmAdd = 0
if (splitTime.includes("pm")) {
     pmAdd = 12
}


let sortableTime = pmAdd + splitColon



new Date(event.enddate) !== new Date() &&
