import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import Table from '../components/table.js';

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
    render: ({ userId }) => <a href='#'>View User {userId}</a>,
  },
];

export default function Home() {
  const [status, setStatus] = useState('loading');
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let canceled = false;

    if (status !== 'loading') return;

    fetch('https://jsonplaceholder.typicode.com/posts')
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
    <main>
      <h1 className={styles.heading}>Posts</h1>
      {posts ? (
        <Table columns={columns} data={posts} />
      ) : (
        <p className={styles.loading}>loading posts</p>
      )}
    </main>
  );
}
