import React from 'react';

import { useApi } from '../hooks/useApi';

import Layout from '../components/layout';
import Profile from '../components/profile';
import Loading from '../components/loading';

import Error from '../components/error';

import { ERROR } from '../constants';

export default function Users({ location }) {
  const { pathname } = location;
  const { data, status } = useApi(pathname);

  if (status === ERROR) {
    return <Error redirectTo={pathname} />;
  }

  return <Layout>{data ? <Profile user={data} /> : <Loading />}</Layout>;
}
