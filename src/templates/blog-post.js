import React, { useReducer, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Hashtag from '../components/widget/hashtag'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import SEO from '../components/seo'
import {
  loveReducer,
  initialState,
  fetchLoves,
  LoveContext
} from '../store/love-reducer'
import { hashCode, queryType } from '../shared/util'
import BottomSheet from '../components/widget/bottom-sheet'
import Toast from '../components/widget/toast'
import { ShareButtons } from '../components/widget/share-button'
import ValineComment from '../components/valine-comment'

const paramType = 'blog'

const BlogPost = ({ data, pageContext, location }) => {
  // All fileds post
  const { excerpt, frontmatter, html, timeToRead, fields } = data.blog
  const { title, date, tags, category, cover } = frontmatter
  const { fluid } = cover.childImageSharp
  const keywords = ['mustofa.id', 'blog', ...tags]
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
          burgerIcon='share-2'>
          {/* Social media share */}
          <ShareButtons url={location.href} />
        </Navbar>
      </header>
      <main>
        <div className='hero is-light'>
          <div className='hero-body' style={{ paddingBottom: '0' }}>
            <div className='container'>
              {/* box for the post */}
              <div className='box has-bg-shadow has-rounded-corner is-paddingless'>
                <figure className='image'>
                  {/* cover image */}
                  <Img fluid={fluid} className='coverpic' alt='cover post' />
                </figure>
                <div className='content has-content-padding'>
                  {/* title post and short info */}
                  <h1
                    className='title is-3 has-text-centered'
                    style={{ marginBottom: '1rem' }}>
                    {title}
                  </h1>
                  <p
                    className='title is-7 has-text-grey is-post-detail'
                    style={{
                      marginBottom: '2.5rem'
                    }}>
                    {`${date} - ${timeToRead} min read - `}
                    <Link
                      to={`/${paramType}?${
                        queryType.category
                      }=${category.toLowerCase()}`}>
                      {category}
                    </Link>
                  </p>
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
                  {/* next-love-prev */}
                  <LoveContext.Provider value={{ state, dispatch }}>
                    <BottomSheet pageContext={pageContext} title={title} />
                  </LoveContext.Provider>
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
