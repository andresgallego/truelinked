import React from 'react';

import { useApi } from '../hooks/useApi';

import Layout from '../components/layout';
import Loading from '../components/loading';
import Post from '../components/post';

export default function Posts({ location }) {
  const [{ data: post }] = useApi(location.pathname);

  return <Layout>{post ? <Post post={post} /> : <Loading />}</Layout>;
}
