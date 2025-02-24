import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        console.log("Items fetched", items);
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div>
        Fetch Done: {fetchStatus.fetchDone}
        Currently Fetching: {fetchStatus.currentlyFetching}
      </div>
    </>
  );
}

export default FetchItems;
