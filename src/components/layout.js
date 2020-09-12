import React from 'react';
import { Link } from 'gatsby';
import { HomeOutlined } from '@ant-design/icons';

import './layout.css';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Link to='/'>
          <HomeOutlined />
        </Link>
      </header>
      <main>{children}</main>
    </>
  );
}
