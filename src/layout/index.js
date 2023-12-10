import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PageHeader from '../components/page-header';
import ThemeSwitch from '../components/theme-switch';
import './style.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author {
            name
            social {
              github
            }
          }
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (
    <div className="page-wrapper">
      <PageHeader siteTitle={title || `Title`} />
      <main className="page-content">{children}</main>
      <ThemeSwitch />
    </div>
  );
};

export default Layout;