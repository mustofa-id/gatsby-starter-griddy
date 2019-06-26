import React, { useReducer, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Hashtag from '../components/widget/hashtag'
import { queryType } from '../shared/post-filter'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import SEO from '../components/seo'
import {
  loveReducer,
  initialState,
  fetchLoves,
  LoveContext
} from '../store/love-reducer'
import { hashCode } from '../shared/util'
import BottomSheet from '../components/widget/bottom-sheet'
import Toast from '../components/widget/toast'
import IconButton from '../components/widget/icon-button'

const paramType = 'blog'

const BlogPost = ({ data, pageContext }) => {
  // All fileds post
  const { excerpt, frontmatter, html, timeToRead, fields } = data.blog
  const { title, date, tags, category, cover, attachments } = frontmatter
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
        />
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
                  {/* Files downloadable attachments */}
                  {attachments && (
                    <div>
                      <div style={{ marginBottom: '1rem' }}>Attachments:</div>
                      <div className='buttons'
                        style={{ marginBottom: '1rem' }}>
                        {attachments.map((f, i) => (
                          <IconButton
                            key={`pub-url--${i}`}
                            to={f.publicURL}
                            icon='paperclip'
                            text={`${f.name}.${f.extension}`}
                            download
                            buttonClass='is-light is-small'
                            iconSize='12'
                          />
                        ))}
                      </div>
                    </div>
                  )}
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
        attachments {
          publicURL
          name
          extension
        }
      }
      fields {
        slug
      }
    }
  }
`

export default BlogPost
