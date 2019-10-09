import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import { filterPosts, queryWithType } from '../shared/post-filter'
import { edgesToCategories } from '../shared/util'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Category from '../components/widget/category'
import Masonry from '../components/widget/masonry'
import infiniteScroll from '../shared/infinite-scroll'

const title = 'Blog'
// Screen width break point for masonry
const masonryBreakpoint = {
  default: 4,
  1279: 3,
  850: 2,
  500: 1
}
const postLimit = 6 // limit post each page scroll

const Blog = ({ data, location }) => {
  const { edges } = data.blog

  // Get all categiries from edges
  const categories = edgesToCategories(edges)

  const [limit, setLimit] = useState(postLimit)
  const [isLoading, setLoading, isEnd, setEnd] = infiniteScroll(loadMore)

  // Filter post items by url query
  const posts = filterPosts(edges, location)

  useEffect(() => setEnd(!(limit < posts.length)), [isLoading, isEnd])

  function loadMore () {
    if (limit >= posts.length) {
      setEnd(true)
      return
    }
    setTimeout(() => {
      setLimit(prev => prev + postLimit)
      setLoading(false)
    }, 500) // Delay stop loading in 0.5 second
  }

  const postCount = ` (${posts.length})`
  const subtitle = queryWithType ? queryWithType + postCount : postCount

  return (
    <>
      <SEO title={title} />
      <header>
        <Navbar title={title} subtitle={subtitle} burgerIcon='more'>
          <Category categories={categories} type='blog' />
        </Navbar>
      </header>
      <main className='fade-in'>
        <article className='hero is-light'>
          <div className='hero-body' style={{ paddingBottom: '0' }}>
            <div className='container has-text-centered'>
              <Masonry breakpoint={masonryBreakpoint}>
                {posts.slice(0, limit).map(e => (
                  <BlogItem key={e.node.id} node={e.node} />
                ))}
              </Masonry>
              {isLoading && !isEnd && (
                <div className='button is-light is-loading'>Loading...</div>
              )}
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
    <Link to={fields.slug}>
      <div
        className='box is-paddingless has-rounded-corner has-bg-shadow has-hover-effect'
        style={{ marginBottom: '1rem' }}>
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
