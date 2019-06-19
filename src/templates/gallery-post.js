import React from 'react'
import { graphql } from 'gatsby'

const GalleryPost = ({ data }) => (
  <div>
    <h1>Gallery post!</h1>
  </div>
)

export const query = graphql`
  query galleryPost($slug: String!) {
    gallery: markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      timeToRead
      detail: frontmatter {
        title
        # date(formatString: "DD MMM YYYY")
        # category
        # keywords
        # references {
        #   name
        #   url
        # }
      }
      fields {
        slug
      }
    }
  }
`

export default GalleryPost
