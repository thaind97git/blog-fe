import { useCallback, useLayoutEffect, useRef, useState } from 'react';

const useSafeState = initialState => {
  const mountedRef = useRef(false);
  const [state, setState] = useState(initialState);

  useLayoutEffect(() => {
    mountedRef.current = true;
    return () => (mountedRef.current = false);
  }, []);

  const safeSetState = useCallback(
    updater => {
      if (mountedRef.current) {
        setState(updater);
      }
    },
    [mountedRef],
  );

  return [state, safeSetState];
};

export default useSafeState;
