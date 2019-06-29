import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO ({
  description,
  lang = 'en',
  meta = [],
  keywords = [],
  title,
  image
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title

  const allMeta = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: metaTitle
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author
    },
    {
      name: `twitter:title`,
      content: metaTitle
    },
    {
      name: `twitter:description`,
      content: metaDescription
    }
  ]

  if (image) {
    const imgSrc =
      image.charAt(0) === '/' ? image.substring(1, image.length) : image
    allMeta.push({
      property: `og:image`,
      content: `${site.siteMetadata.siteUrl}${imgSrc}`
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={title ? `%s - ${site.siteMetadata.title}` : `%s`}
      meta={allMeta
        .concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords.join(`, `)
            }
            : []
        )
        .concat(meta)}
    />
  )
}

export default SEO
