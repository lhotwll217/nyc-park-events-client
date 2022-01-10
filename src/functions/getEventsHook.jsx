import {useEffect, useState} from "react";
import axios from "axios";

export default function useGetEvents(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [events, setEvents] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setEvents([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "http://localhost:3000/filtered",
      params: {date: query, page: pageNumber},
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setEvents((prevEvents) => {
          return [...new Set([...prevEvents, ...res.data])];
        });
        setLoading(false);
        setHasMore(res.data.length > 0);
        console.log(res.data);
      })

      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);
  return {loading, error, hasMore, events};
}
