import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const Gallery = ({ data }) => {
  const { edges } = data.gallery

  // Example fake data
  const dummyData = [...edges, ...edges]
  dummyData.reverse()

  return (
    <Layout title='Gallery'>
      <article className='hero is-fullheight is-light'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='columns is-centered is-multiline'>
              {/* take a look at this: https://www.npmjs.com/package/react-masonry-css */}
              {[...dummyData, ...edges].map(e => (
                <GalleryItem key={e.node.id} node={e.node} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const GalleryItem = ({ node }) => {
  const { fields, excerpt, frontmatter } = node
  const { title, date, category, timeToRead, cover } = frontmatter

  console.log(excerpt, title, date, category, timeToRead)

  return (
    <Link className='column is-one-third' to={fields.slug}>
      <div className='box is-paddingless'>
        <Img
          style={{ borderRadius: '6px 6px 6px 6px' }}
          fluid={cover.childImageSharp.fluid}
        />
      </div>
    </Link>
  )
}

export const query = graphql`
  query {
    gallery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { postType: { eq: "gallery" } } }
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
                fluid(maxHeight: 500, quality: 90) {
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

export default Gallery
