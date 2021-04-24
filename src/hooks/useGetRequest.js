import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setLoading } from '@/store/actions';
import HttpRequest from '@/services/http-request';

const useGetRequest = ({
  promiseFunction,
  url = '',
  config = {},
  isLoading = true,
  refresh,
  triggerCondition = true,
  param = {},
}) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const dispatch = useDispatch();

  const callLoading = useCallback(
    (loading, hasLoading) => {
      if (hasLoading) {
        dispatch(setLoading(loading));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (!triggerCondition) {
      return;
    }
    setData(undefined);
    setError(undefined);
    let requestFunc;
    const source = axios.CancelToken.source();
    const configAxios = Object.assign(
      {},
      { cancelToken: source.token },
      config,
    );

    if (typeof promiseFunction === 'function') {
      requestFunc = promiseFunction(param, configAxios);
    } else {
      requestFunc = HttpRequest.get(url, configAxios);
    }
    // add loading for api request
    callLoading(true, isLoading);
    // setFetching(true);

    requestFunc
      .then(response => {
        setData(response.data);
        // remove loading for api request
        callLoading(false, isLoading);
      })
      .catch(error => {
        setError(error);
        //remove loading for api request
        callLoading(false, isLoading);
      });

    return () => {
      // unsubscribe api axios when unmount
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, promiseFunction, refresh]);

  return { data, error, fetching: !data && !error };
};

export default useGetRequest;
