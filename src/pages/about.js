import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import TimeStampSection from '../components/timestamp-section';
import ProjectSection from '../components/project-section';

function AboutPage({ data }) {
  const metaData = data?.site?.siteMetadata;
  const { about } = metaData;
  const { timestamps, projects } = about;
  return (
    <Layout>
      <TimeStampSection timestamps={timestamps} />
      <ProjectSection projects={projects} />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            email
          }
        }

        about {
          timestamps {
            date
            activity
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }

          projects {
            title
            description
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;
