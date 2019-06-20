import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import profilpic from '../assets/images/profile.jpg'

const IndexPage = ({ data }) => {
  const { title, description, nav } = data.site.siteMetadata
  return (
    // navless will remove navbar from layout & footless remove footer from layout
    <Layout navless footless>
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
                  className='field buttons has-addons is-centered'
                  style={{ marginTop: '0.8rem' }}>
                  {/* If wanna use button with icon you can use IconButton instead of Link */}
                  {nav.map((item, index) => (
                    <Link
                      className='button'
                      key={`${index}--${item.name}`}
                      to={item.href}>
                      {item.name}
                    </Link>
                    // <IconButton
                    //   key={`${index}--${item.name}`}
                    //   to={item.href}
                    //   text={item.name}
                    //   icon={item.icon}
                    // />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
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
      }
    }
  }
`

export default IndexPage
