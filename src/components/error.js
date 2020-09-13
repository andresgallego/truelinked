import React from 'react';
import { Link } from 'gatsby';
import { Result } from 'antd';

import Layout from '../components/layout';

export default function Error({ redirectTo }) {
  return (
    <Layout>
      <Result
        subTitle='Sorry, something went wrong.'
        extra={<Link to={redirectTo}>Reload</Link>}
      />
    </Layout>
  );
}
