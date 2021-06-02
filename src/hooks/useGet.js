import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setLoading } from '@/store/actions';
import httpRequest from '@/services/http-request';

import useSafeState from './useSafeState';

// const isPromise = func => func && typeof func.then === 'function';

const useGet = ({
  func,
  url = '',
  payload = {},
  isLoading = true,
  refresh,
  triggerCondition = true,
}) => {
  const [data, setData] = useSafeState(undefined);
  const [error, setError] = useSafeState(undefined);
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
    if (!triggerCondition || (typeof func !== 'function' && !url)) {
      return;
    }

    setData(undefined);
    setError(undefined);
    let requestFunc;

    if (typeof func === 'function') {
      requestFunc = func();
    } else {
      requestFunc = httpRequest.get(url, ...payload);
    }

    // add loading for api request
    callLoading(true, isLoading);

    requestFunc
      .then(response => {
        setData(response.data);
        callLoading(false, isLoading);
      })
      .catch(error => {
        setError(error);
        callLoading(false, isLoading);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, refresh]);
  return { data, error, fetching: !data && !error };
};

export default useGet;
