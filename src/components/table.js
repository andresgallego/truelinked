import React from 'react';
import { Table as AntdTable } from 'antd';

import 'antd/dist/antd.css';
import styles from './table.module.css';

export default function Table({ columns, data }) {
  return (
    <div className={styles.wrapper}>
      <AntdTable
        bordered
        columns={columns}
        dataSource={data}
        pagination={{ position: ['bottomCenter'] }}
      />
    </div>
  );
}
