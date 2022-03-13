import {CircularProgress, Grid, Typography} from "@mui/material";

export default function PaginationLoading() {
  return (
    <Grid ml={5} container justifyContent='center'>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          marginTop: "25px",
        }}
      >
        <CircularProgress size={75} color='primary' />
        <Typography
          mt={4}
          mb={10}
          textAlign='center'
          fontSize='1.6rem'
          fontWeight='600'
        >
          Loading...
        </Typography>
      </div>
    </Grid>
  );
}
