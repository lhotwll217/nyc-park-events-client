import AllEvents from "./AllEvents";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";

function Home(props) {
  const [date, setDate] = useState(null);
  console.log(props.user.profile);

  if (date) {
    console.log(date._d);
  }

  if (props.user) {
    return (
      <div>
        <div style={{ marginLeft: "75px" }}>
          <Grid container justify="center">
            <img
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                marginTop: "80px",
              }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg/800px-Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg.png"
              width={150}
              alt="NYC Parks and Rec"
            />
            <div style={{ margin: "auto" }}>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                  label="Search Date"
                  value={date}
                  onChange={(newDate) => {
                    setDate(newDate);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </Grid>
        </div>

        <AllEvents events={props.events} user={props.user} />
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default Home;
