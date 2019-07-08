/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const parentDir = getNode(node.parent).sourceInstanceName
    const slug = '/' + parentDir + createFilePath({ node, getNode })
    createNodeField({ name: `postType`, node, value: parentDir })
    createNodeField({ name: `slug`, node, value: slug })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const galleryPost = path.resolve('./src/templates/gallery-post.js')
  const blogPost = path.resolve('./src/templates/blog-post.js')
  return graphql(
    `
      {
        gallery: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { postType: { eq: "gallery" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        blog: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { postType: { eq: "blog" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.errors) {
      throw res.errors
    }
    createPostPage(actions, res.data.gallery.edges, galleryPost)
    createPostPage(actions, res.data.blog.edges, blogPost)
  })
}

const createPostPage = (actions, posts, component) => {
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    actions.createPage({
      path: post.node.fields.slug,
      component,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    })
  })
}

// Disable generate source maps in production
// You must use `npm run build` as build command at your server/hosting
// Eg. in Netlify go to your site -> tab setting -> Build & Deploy -> Edit Settings
// Change build command to `npm run build` or if you using Netlify plugin
// you can set it in `netlify.toml` file
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false
    })
  }
}
