import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const Fetchingdata = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetchStatus);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchFinished());
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(itemActions.addInitialItem(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};

export default Fetchingdata;
