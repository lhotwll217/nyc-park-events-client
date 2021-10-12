import Grid from "@mui/material/Grid";

function EventsContainer({ renderFunction }) {
  return (
    //marginLeft was 200
    <div style={{ marginTop: "35px", marginLeft: "125px" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="space-around"
        spacing={6}
      >
        {renderFunction()}
      </Grid>
    </div>
  );
}

export default EventsContainer;
