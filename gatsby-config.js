const { siteMetadata } = require('./griddy-config')

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/pages/gallery`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${siteMetadata.title} Web`,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: siteMetadata.primaryColor,
        theme_color: siteMetadata.primaryColor,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      // https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      // https://www.gatsbyjs.org/docs/adding-analytics/
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: `UA-XXXXXXXXX-X`
      }
    },
    {
      // https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // exclude: [`/category/*`, `/path/to/page`]
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7
            }
          })
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
