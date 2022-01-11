import {Grid} from "@mui/material";

export default function AppLogo() {
  return (
    <div>
      <Grid container justifyContent='center'>
        <img
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            marginTop: "110px",
          }}
          src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg/800px-Logo_of_the_New_York_City_Department_of_Parks_%26_Recreation.svg.png'
          width={150}
          alt='NYC Parks and Rec'
        />
      </Grid>
    </div>
  );
}
