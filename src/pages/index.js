import React from 'react';
import { Link } from 'gatsby';

import Error from '../components/error';
import Layout from '../components/layout';
import Loading from '../components/loading';
import Table from '../components/table';

import { useApi } from '../hooks/useApi';

import { ERROR } from '../constants';

import styles from './index.module.css';

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
    width: 200,
    render: ({ id, userId }) => (
      <span className={styles.column}>
        <Link to={`/posts/${id}`}>Read Post</Link>
        <Link to={`/users/${userId}`}>About the author</Link>
      </span>
    ),
  },
];

export default function Home() {
  const { data, status } = useApi(`/posts`);

  if (status === ERROR) {
    return <Error redirectTo='/' />;
  }

  return (
    <Layout>
      {data ? <Table columns={columns} data={data} /> : <Loading />}
    </Layout>
  );
}
