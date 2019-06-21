import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Hashtag from '../components/widget/hashtag'
import { queryType } from '../shared/post-filter'
import Footer from '../components/footer'
import SEO from '../components/seo'
import Navbar from '../components/navbar'

const paramType = 'gallery'

const GalleryPost = ({ data, location }) => {
  // All fileds post
  const { excerpt, frontmatter, html, timeToRead } = data.gallery
  const { title, date, tags, category, cover } = frontmatter
  const { fluid } = cover.childImageSharp
  const ogImage = `${location.origin}${fluid.src}`
  const keywords = ['mustofa.id', 'gallery', ...tags]

  const seoProps = { title, description: excerpt, keywords, image: ogImage }

  return (
    <>
      <SEO {...seoProps} />
      <header>
        <Navbar
          backTo={`/${paramType}`}
          title={category}
          subtitle={`· ${timeToRead} min read`}
        />
      </header>
      <main>
        <div className='hero is-fullheight is-light'>
          <div className='hero-body' style={{ paddingBottom: '0' }}>
            <div className='container'>
              {/* box for gallery post */}
              <div
                className='box has-bg-shadow has-rounded-corner is-paddingless'
                style={{ marginTop: '2rem' }}>
                <figure className='image'>
                  {/* cover image */}
                  <Img fluid={fluid} className='coverpic' alt='cover post' />
                </figure>
                <div className='content has-content-padding'>
                  <h1 className='title is-4' style={{ marginBottom: '1rem' }}>
                    {title}
                  </h1>
                  <p
                    className='title is-7 has-text-grey'
                    style={{ marginBottom: '1.5rem' }}>
                    {`${date} - ${timeToRead} min read - `}
                    <Link
                      to={`/${paramType}?${
                        queryType.category
                      }=${category.toLowerCase()}`}>
                      {category}
                    </Link>
                  </p>
                  <hr style={{ marginTop: '0' }} />
                  {/* content of the post */}
                  <article dangerouslySetInnerHTML={{ __html: html }} />
                  {/* hastag */}
                  <Hashtag type={paramType} tags={tags} />
                  {/* we need tu put the next-love-prev button like https://mustofa.id/blog/ here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
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
