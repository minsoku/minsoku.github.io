import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

function Seo({ description }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
            ogImage
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      defaultTitle={site.siteMetadata.title}
      meta={[
        {
          property: `og:title`,
          content: "minlog",
        },
        {
          property: `og:site_title`,
          content: "minlog",
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: "og:author",
          content: site.siteMetadata.author.name,
        },
        {
          property: "og:image",
          content: site.siteMetadata.ogImage,
        },

        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
}

export default Seo;
