import React from 'react';

import { useApi } from '../hooks/useApi';

import Layout from '../components/layout';
import Profile from '../components/profile';
import Loading from '../components/loading';

export default function Users({ location }) {
  const [{ data: user }] = useApi(location.pathname);

  return <Layout>{user ? <Profile user={user} /> : <Loading />}</Layout>;
}
