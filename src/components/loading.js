import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <LoadingOutlined />
    </div>
  );
}
