import { useEffect, useState } from 'react';

import { API_URL, ERROR, LOADED, LOADING } from '../constants';

export const useApi = (path) => {
  const [status, setStatus] = useState(LOADING);
  const [data, setData] = useState(null);

  useEffect(() => {
    let canceled = false;

    if (status !== LOADING) return;

    fetch(`${API_URL}${path}`)
      .then((res) => {
        if (canceled === true) return;

        if (res.status !== 200) {
          console.error('Error loading posts!');
          console.error(res);
          setStatus(ERROR);
          return;
        }

        return res.json();
      })
      .then((res) => {
        setData(res);
        setStatus(LOADED);
      })
      .catch((error) => {
        console.error(error);
        setStatus(ERROR);
        return;
      });

    return () => {
      canceled = true;
    };
  }, [path, status]);

  return { data, status };
};
