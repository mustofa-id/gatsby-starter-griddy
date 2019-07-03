import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { filter, queryWithType } from '../shared/post-filter'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import SEO from '../components/seo'
import { edgesToCategories } from '../shared/util'
import Category from '../components/widget/category'
import Masonry from '../components/widget/masonry'
import infiniteScroll from '../shared/infinite-scroll'

const title = 'Gallery'
// Screen width break point for masonry
const masonryBreakpoint = {
  default: 4,
  1279: 3,
  850: 2,
  500: 1
}
const postLimit = 2 // limit post each page scroll

const Gallery = ({ data, location }) => {
  const { edges } = data.gallery

  // Get all categiries from edges
  const categories = edgesToCategories(edges)

  const [limit, setLimit] = useState(postLimit)
  const [isLoading, setLoading, isEnd, setEnd] = infiniteScroll(loadMore)

  // Filter post items by url query
  const posts = filter(edges, location)

  useEffect(() => setEnd(!(limit < posts.length)), [isLoading, isEnd])

  function loadMore () {
    if (limit >= posts.length) {
      setEnd(true)
      return
    }
    setTimeout(() => {
      setLimit(prev => prev + postLimit)
      setLoading(false)
    }, 300) // Delay stop loading in 0.5 second
  }

  const postCount = ` (${posts.length})`
  const subtitle = queryWithType ? queryWithType + postCount : postCount

  return (
    <>
      <SEO title={title} />
      <header>
        <Navbar title={title} subtitle={subtitle}>
          <Category categories={categories} type='gallery' />
        </Navbar>
      </header>
      <main className='fade-in'>
        <article className='hero is-light'>
          <div className='hero-body' style={{ paddingBottom: '0' }}>
            <div className='container has-text-centered'>
              <Masonry breakpoint={masonryBreakpoint}>
                {posts.slice(0, limit).map(e => (
                  <GalleryItem key={e.node.id} node={e.node} />
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

const GalleryItem = ({ node }) => {
  const { fields, frontmatter } = node
  const { title, cover } = frontmatter

  return (
    <Link to={fields.slug}>
      <div className='wrapper'>
        <figure
          className='image has-rounded-corner has-bg-shadow has-hover-effect'
          style={{ marginBottom: '1rem' }}>
          <Img
            className='has-rounded-corner thumb'
            fluid={cover.childImageSharp.fluid}
          />
          <div className='overlay'>
            <div className='caption'>
              <h1 className='title is-6'>{title}</h1>
              <p className='subtitle is-7 is-caption-detail'>view</p>
            </div>
          </div>
        </figure>
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
          fields {
            slug
          }
          frontmatter {
            title
            category
            tags
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
