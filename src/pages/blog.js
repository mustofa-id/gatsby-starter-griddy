import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import { filter, queryWithType } from '../shared/post-filter'
import { edgesToCategories } from '../shared/util'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const title = 'Blog'

const Blog = ({ data, location }) => {
  let { edges } = data.blog

  // Get all categiries from edges
  const categories = edgesToCategories(edges)

  // Filter post items by url query
  edges = filter(edges, location)

  return (
    <>
      <SEO title={title} />
      <header>
        <Navbar
          title={title}
          subtitle={queryWithType}
          type='blog'
          categories={categories}
        />
      </header>
      <main>
        <article className='hero is-fullheight is-light'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <div className='columns is-centered is-multiline'>
                {edges.map(e => (
                  <BlogItem key={e.node.id} node={e.node} />
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

const BlogItem = ({ node }) => {
  const { fields, excerpt, frontmatter } = node
  const { title, date, category, timeToRead, cover } = frontmatter
  return (
    <Link className='column is-one-third is-flex' to={fields.slug}>
      <div className='box is-paddingless has-rounded-corner has-bg-shadow'>
        <Img
          style={{ borderRadius: '10px 10px 0 0' }}
          fluid={cover.childImageSharp.fluid}
        />
        <div className='media-content' style={{ padding: '1rem' }}>
          <div className='content'>
            <p style={{ marginBottom: '0.5em' }}>
              <strong>{title}</strong>
            </p>
            <p className='is-size-6' style={{ marginBottom: '0.5em' }}>
              {excerpt}
            </p>
            <p className='is-size-7'>
              {date} in <strong>{category}</strong> · {timeToRead} min read
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export const query = graphql`
  query {
    blog: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { postType: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 60)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
            category
            cover {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 200, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
