import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { filter, queryWithType } from '../shared/post-filter'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import SEO from '../components/seo'
import { edgesToCategories } from '../shared/util'
import Category from '../components/widget/category'
import Masonry from '../components/widget/masonry'

const title = 'Gallery'
// Screen width break point for masonry
const masonryBreakpoint = {
  default: 4,
  1300: 3,
  850: 2,
  500: 1
}

const Gallery = ({ data, location }) => {
  let { edges } = data.gallery

  // Get all categiries from edges
  const categories = edgesToCategories(edges)

  // Filter post items by url query
  edges = filter(edges, location)

  return (
    <>
      <SEO title={title} />
      <header>
        <Navbar title={title} subtitle={queryWithType}>
          <Category categories={categories} type='gallery' />
        </Navbar>
      </header>
      <main className='fade-in'>
        <article className='hero is-light'>
          <div className='hero-body'
            style={{ paddingBottom: '0' }}>
            <div className='container has-text-centered'>
              <Masonry breakpoint={masonryBreakpoint}>
                {edges.map(e => (
                  <GalleryItem key={e.node.id} node={e.node} />
                ))}
              </Masonry>
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
        <figure className='image has-rounded-corner has-bg-shadow has-hover-effect' style={{ marginBottom: '1rem' }}>
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
