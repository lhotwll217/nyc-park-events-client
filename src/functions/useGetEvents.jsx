import {useEffect, useState} from "react";
import axios from "axios";

export default function useGetEvents(query, page, searchBarValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [events, setEvents] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setEvents([]);
    setHasMore(true);
  }, [query, searchBarValue]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "/server/events",
      params: {date: query, page: page, search: searchBarValue},
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setEvents((prevEvents) => {
          return [...new Set([...prevEvents, ...res.data])];
        });
        setLoading(false);
        setHasMore(res.data.length > 0);
      })

      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, page, searchBarValue]);
  return {loading, error, hasMore, events};
}
