import {CircularProgress, Grid, Typography} from "@mui/material";
import {useEffect, useRef} from "react";

export default function PaginationLoading({loading}) {
  const divRef = useRef(null);
  // useEffect(() => {
  //   if (divRef.current) {
  //     divRef.current.scrollIntoView({block: "end", inline: "end"});
  //   }
  // }, [divRef]);

  // function AlwaysScrollToBottom() {
  //   const elementRef = useRef();
  //   useEffect(() => {
  //     if (loading) {
  //       window.scrollTo()
  //       });
  //     }
  //     return;
  //   }, [elementRef]);
  //   return <div style={{height: "30px"}} ref={elementRef} />;
  // }

  useEffect(() => {
    if (divRef.current !== null) {
      divRef.current.scrollIntoView({
        block: "nearest",
        inline: "center",
        alignToTop: false,
      });
    }
  }, [divRef, loading]);
  // useEffect(() => {
  //   if (divRef.current) {
  //     window.scrollTo({
  //       // behavior: "smooth",
  //       top: divRef.current.offsetTop,
  //     });
  //   }
  // }, [divRef, loading]);
  return (
    <Grid container justifyContent='center'>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          marginTop: "25px",
        }}
      >
        <CircularProgress variant='indeterminate' size={100} />
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
      {/* <AlwaysScrollToBottom /> */}

      <div ref={divRef} style={{height: "20px"}} />
    </Grid>
  );
}
