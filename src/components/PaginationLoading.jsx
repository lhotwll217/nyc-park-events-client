import {Typography, Grid} from "@mui/material";
import {useEffect, useRef} from "react";

export default function PaginationLoading({loading}) {
  const loadingRef = useRef(null);

  //   function scrollToBottom() {
  //     loadingRef.current.scrollIntoView({block: "end"});
  //   }

  //   useEffect(() => {
  //     scrollToBottom();
  //   }, [loading]);

  return (
    <Typography
      mt={4}
      mb={6}
      textAlign='center'
      fontSize='1.6rem'
      fontWeight='600'
    >
      <div ref={loadingRef}>Loading...</div>
    </Typography>
  );
}
