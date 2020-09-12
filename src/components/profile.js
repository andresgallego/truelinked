import React from 'react';
import {
  EnvironmentOutlined,
  LinkOutlined,
  MailOutlined,
} from '@ant-design/icons';

import styles from './profile.module.css';

export default function Profile({ user }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.name}>{user.name}</span>
      <span className={styles.username}>{user.username}</span>
      <div>
        <EnvironmentOutlined />
        <span className={styles.detail}>{user.address.city}</span>
      </div>
      <div>
        <MailOutlined />
        <span className={styles.detail}>{user.email}</span>
      </div>
      <div>
        <LinkOutlined />
        <span className={styles.detail}>{user.website}</span>
      </div>
    </div>
  );
}
