import React from 'react';

import { useApi } from '../hooks/useApi';

import Layout from '../components/layout';
import Loading from '../components/loading';
import Post from '../components/post';
import Error from '../components/error';

import { ERROR } from '../constants';

export default function Posts({ location }) {
  const { pathname } = location;
  const { data, status } = useApi(pathname);

  if (status === ERROR) {
    return <Error redirectTo={pathname} />;
  }

  return <Layout>{data ? <Post post={data} /> : <Loading />}</Layout>;
}
