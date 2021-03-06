import {Grid, CircularProgress, Typography} from "@mui/material";

export default function InitialLoading() {
  return (
    <Grid container justifyContent='center'>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          marginTop: "250px",
        }}
      >
        <CircularProgress size={100} color='primary' />
        <Typography mr={2} mt={6} variant='h4' textAlign='center'>
          Loading{"  "}
        </Typography>
      </div>
    </Grid>
  );
}
