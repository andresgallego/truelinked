import React from 'react';
import { Link } from 'gatsby';

import { useApi } from '../hooks/useApi';

import Layout from '../components/layout';
import Table from '../components/table';
import Loading from '../components/loading';

import { API_URL } from '../constants';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'User Id',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'operations',
    render: ({ userId }) => <Link to={`/users/${userId}`}>View User</Link>,
  },
];

export default function Home() {
  const [{ data: posts }] = useApi(`${API_URL}/posts`);

  return (
    <Layout>
      {posts ? <Table columns={columns} data={posts} /> : <Loading />}
    </Layout>
  );
}
