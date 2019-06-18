import React from 'react'
import SEO from './seo'

const Layout = ({ title, description, children, keywords }) => (
  <>
    <SEO keywords={keywords} title={title} description={description} />
    <header>
      {/* navbar follow the leader on https://mustofa.id */}
    </header>
    <main>{children}</main>
    <footer className='footer'>
      <Footer />
    </footer>
  </>
)

const Footer = () => (
  <div className='content has-text-centered'>
    <p>
      {/**
       * You are permitted to change the copyright name and url.
       * If you url is local (eg. /) it's better use Link components
       * from Gatsby. Example: <Link to='/'>mustofa.id</Link>
       */}
      © 2018-2019 <a href='https://mustofa.id'>mustofa.id</a>
      <br />
      Powered by <a href='https://www.gatsbyjs.org/'>Gatsby</a> and{' '}
      <a href='https://bulma.io'>Bulma</a>
      <br />
      Starter source code is available on{' '}
      <a href='https://github.com/mustofa-id/gatsby-starter-griddy'>Github</a>
    </p>
  </div>
)

export default Layout
