import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

const Blog = ({ data }) => {
  const { edges } = data.blog
  return (
    <Layout title='Blog'>
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
    </Layout>
  )
}

const BlogItem = ({ node }) => {
  const { fields, excerpt, frontmatter } = node
  const { title, date, category, timeToRead, cover } = frontmatter
  return (
    <Link className='column is-one-third is-flex' to={fields.slug}>
      <div className='box is-paddingless'>
        <Img
          style={{ borderRadius: '6px 6px 0 0' }}
          fluid={cover.childImageSharp.fluid}
        />
        <div className='media-content' style={{ padding: '1rem' }}>
          <div className='content'>
            <p>
              <strong>{title}</strong>
            </p>
            <p>{excerpt}</p>
            <p className='is-size-7'>
              {date} di <strong>{category}</strong> · {timeToRead} menit baca
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
