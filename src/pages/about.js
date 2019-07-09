import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const About = ({ data }) => {
  const { title, description, author } = data.site.siteMetadata
  return (
    <>
      <SEO title='About' />
      <header>
        <Navbar title='About' />
      </header>
      <article className='hero is-fullheight is-light'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title'>{title}</p>
            <p className='subtitle'>{`${description} made by ${author}`}</p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default About
