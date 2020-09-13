import React from 'react';

import styles from './post.module.css';

export default function Post({ post }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{post.title}</h1>
      <article>{post.body}</article>
    </div>
  );
}
