import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

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
  const [status, setStatus] = useState('loading');
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let canceled = false;

    if (status !== 'loading') return;

    fetch(`${API_URL}/posts`)
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
        setPosts(res);
        setStatus('loaded');
      })
      .catch((error) => console.error(error));

    return () => {
      canceled = true;
    };
  }, [status]);

  return (
    <Layout>
      {posts ? <Table columns={columns} data={posts} /> : <Loading />}
    </Layout>
  );
}
