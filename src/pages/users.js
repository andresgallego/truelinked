import React, { useEffect, useState } from 'react';

import Layout from '../components/layout';
import Profile from '../components/profile';
import Loading from '../components/loading';

import { API_URL } from '../constants';

export default function Users({ location }) {
  const [status, setStatus] = useState('loading');
  const [user, setUser] = useState(null);

  useEffect(() => {
    let canceled = false;

    if (status !== 'loading') return;

    fetch(`${API_URL}${location.pathname}`)
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
        setUser(res);
        setStatus('loaded');
      })
      .catch((error) => console.error(error));

    return () => {
      canceled = true;
    };
  }, [status]);

  return <Layout>{user ? <Profile user={user} /> : <Loading />}</Layout>;
}
