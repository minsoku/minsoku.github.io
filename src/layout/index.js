import React from 'react';
import PageHeader from '../components/page-header';
import './style.scss';

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <PageHeader siteTitle="minlog" />
      <main className="page-content">{children}</main>
    </div>
  );
};

export default Layout;
