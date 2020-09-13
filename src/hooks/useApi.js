import { useEffect, useState } from 'react';

export const useApi = (url) => {
  const [status, setStatus] = useState('loading');
  const [data, setData] = useState(null);

  useEffect(() => {
    let canceled = false;

    if (status !== 'loading') return;

    fetch(url)
      .then((res) => {
        if (canceled === true) return;

        if (res.status !== 200) {
          console.error('Error loading posts!');
          console.error(res);
          return;
        }

        return res.json();
      })
      .then((res) => {
        setData(res);
        setStatus('loaded');
      })
      .catch((error) => console.error(error));

    return () => {
      canceled = true;
    };
  }, [status]);

  return [{ data, status }];
};
