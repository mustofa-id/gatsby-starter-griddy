import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const BlogPost = ({ data, location }) => {
  // All fileds post
  const { excerpt, frontmatter, html, timeToRead } = data.blog
  const { title, date, tags, category, cover } = frontmatter
  const { fluid } = cover.childImageSharp
  const ogImage = `${location.origin}${fluid.src}`
  const keywords = ['mustofa.id', 'blog', ...tags]

  return (
    <Layout title={title} description={excerpt} keywords={keywords} image={ogImage} >
      <div className='hero is-fullheight is-light'>
        <div className='hero-body' style={{ paddingBottom: '0' }}>
          <div className='container'>
            {/* box for the post */}
            <div className='box has-bg-shadow has-rounded-corner is-paddingless' style={{ marginTop: '2rem' }}>
              <figure className='image'>
                {/* cover image */}
                <Img
                  fluid={fluid}
                  className='coverpic'
                  alt='cover post' />
              </figure>
              <div className='content has-content-padding'>
                {/* title post and short info */}
                <h1 className='title is-3 has-text-centered' style={{ marginBottom: '1rem' }}>{title}</h1>
                <p className='title is-7 has-text-grey is-post-detail' style={{ marginBottom: '2.5rem' }}>{`${date} - ${timeToRead} min read - ${category}`}</p>
                {/* content of the post */}
                <article
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                {/* we need to put hastag of the post here */}
                {/* we need tu put the next-love-prev button like https://mustofa.id/blog/ here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query blogPost($slug: String!) {
    blog: markdownRemark(fields: { slug: { eq: $slug } }) {
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

export default BlogPost
