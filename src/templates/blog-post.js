import React from 'react'
import { graphql } from 'gatsby'

const BlogPost = props => (
  <div>
    <h1>Blog post!</h1>
  </div>
)

export const query = graphql`
  query blogPost($slug: String!) {
    blog: markdownRemark(fields: { slug: { eq: $slug } }) {
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

export default BlogPost
