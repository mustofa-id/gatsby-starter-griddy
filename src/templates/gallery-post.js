import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const GalleryPost = ({ data, location }) => {
  // All fileds post
  const { excerpt, frontmatter, html, timeToRead } = data.gallery
  const { title, date, tags, category, cover } = frontmatter
  const { fluid } = cover.childImageSharp
  const ogImage = `${location.origin}${fluid.src}`
  const keywords = ['mustofa.id', 'gallery', ...tags]

  return (
    <Layout title={title} description={excerpt} keywords={keywords} image={ogImage} >
      <div className='sectiom'>
        {/* Cover image */}
        <Img fluid={fluid} />
      </div>
      <div className='section has-text-centered'>
        {/* Post title */}
        <h1 className='title' >{title}</h1>
        <p className='subtitle'>{`${date} - ${timeToRead} min read - ${category}`}</p>
      </div>
      <div className='section'>
        <div className='container'>
          {/* Post detail / html */}
          <span
            className='content'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query galleryPost($slug: String!) {
    gallery: markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        tags
        category
        cover {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`

export default GalleryPost
