import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import profilpic from '../assets/images/profile.jpg'
import SEO from '../components/seo'
import IconButton from '../components/widget/icon-button'

const IndexPage = ({ data }) => {
  const { title, description, nav, social } = data.site.siteMetadata
  return (
    <>
      {/* Add seo props as you wish */}
      <SEO />
      <main className='fade-in'>
        <article className='hero is-fullheight is-light'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <div className='box has-bg-shadow coverbox has-rounded-corner'>
                <figure className='image'>
                  {/* Cover is large image, we load that using gatsby-image for optimize peformance */}
                  <Img
                    fluid={data.cover.childImageSharp.fluid}
                    className='image coverpic'
                    alt='Cover'
                  />
                </figure>
                <figure
                  // we need to add gatsby-image to this
                  id='profile_pic'
                  className='image is-128x128 has-image-centered'>
                  <img
                    className='is-rounded has-padding-4'
                    src={profilpic}
                    alt='Profile'
                  />
                </figure>
                <div className='profile_info'>
                  <h1 className='title is-3' style={{ marginBottom: '1.9rem' }}>
                    {title}
                  </h1>
                  <h2
                    className='subtitle is-6'
                    style={{ marginBottom: '0.9rem' }}>
                    {description}
                  </h2>
                  <div
                    className='buttons is-centered'
                    style={{ marginTop: '0.8rem' }}>
                    {/* If wanna use button with icon you can use IconButton instead of Link */}
                    {nav.map((item, index) => (
                      <Link
                        className='button is-light'
                        key={`${index}--${item.name}`}
                        to={item.href}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className='content has-content-padding'>
                    <p className='title is-5 is-post-detail'>
                      What is Lorem Ipsum?
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p className='title is-5 is-post-detail'
                      style={{ paddingTop: '1rem' }}>
                      Why do we use it?
                    </p>
                    <p>
                      It is a long established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                      as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    {/* put the social media icon here */}
                    <div className='buttons is-centered'>
                      {social.map((item, index) => (
                        <IconButton
                          key={`${index}--${item.name}`}
                          to={item.href}
                          icon={item.icon}
                          iconSize='24'
                          buttonClass='is-white is-large has-text-grey'
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export const query = graphql`
  query {
    cover: file(relativePath: { eq: "cover.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        nav: menuItemsStart {
          name
          href
          icon
        }
        social: socialLink {
          name
          href
          icon
        }
      }
    }
  }
`

export default IndexPage
