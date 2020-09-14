import React from 'react';

import styles from './post.module.css';

export default function Post({ post }) {
  return (
    <section className={styles.wrapper}>
      <section className={styles.content}>
        <h1 className={styles.title}>{post.title}</h1>
        <article>{post.body}</article>
      </section>
    </section>
  );
}
