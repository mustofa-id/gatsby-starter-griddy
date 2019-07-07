import React, { useEffect, useReducer } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Hashtag from '../components/widget/hashtag'
import Footer from '../components/footer'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import BottomSheet from '../components/widget/bottom-sheet'
import {
  LoveContext,
  loveReducer,
  initialState,
  fetchLoves
} from '../store/love-reducer'
import { hashCode, queryType } from '../shared/util'
import Toast from '../components/widget/toast'
import { ShareButtons } from '../components/widget/share-button'
import ValineComment from '../components/valine-comment'

const paramType = 'gallery'

const GalleryPost = ({ data, pageContext, location }) => {
  // All fileds post
  const { excerpt, frontmatter, html, timeToRead, fields } = data.gallery
  const { title, date, tags, category, cover } = frontmatter
  const { fluid } = cover.childImageSharp
  const keywords = ['mustofa.id', 'gallery', ...tags]
  const seoProps = { title, description: excerpt, keywords, image: fluid.src }

  // Reducer
  const [state, dispatch] = useReducer(loveReducer, initialState)
  const postId = hashCode(fields.slug).toString()

  useEffect(() => {
    fetchLoves(dispatch, postId)
  }, [])

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
        <div className='hero is-light'>
          <div className='hero-body' style={{ paddingBottom: '0' }}>
            <div className='container'>
              {/* box for gallery post */}
              <div className='box has-bg-shadow has-rounded-corner is-paddingless'>
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
                  <article
                    dangerouslySetInnerHTML={{ __html: html }}
                    style={{ marginBottom: '1rem' }}
                  />
                  {/* hastag */}
                  {tags && (
                    <div className='hastag'>
                      <Hashtag type={paramType} tags={tags} />
                    </div>
                  )}
                  {/* next-love-prev button */}
                  <LoveContext.Provider value={{ state, dispatch }}>
                    <BottomSheet pageContext={pageContext} title={title} />
                  </LoveContext.Provider>
                  {/* Social media share */}
                  <p className='has-text-centered'>
                    <ShareButtons
                      url={location.href}
                      iconSize='24'
                      buttonClass='is-white has-text-grey'
                    />
                  </p>
                  {/* Valine comment system */}
                  <ValineComment />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toast shown={state.message} message={state.message} type='dark' />
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
