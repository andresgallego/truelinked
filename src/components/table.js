import React from 'react';
import { Table as AntdTable } from 'antd';

import 'antd/dist/antd.css';

export default function Table({ columns, data }) {
  return (
    <AntdTable
      bordered
      columns={columns}
      dataSource={data}
      pagination={{ position: ['bottomCenter'] }}
    />
  );
}
