import React from 'react'
import SEO from './seo'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({
  title,
  description,
  keywords,
  image,
  navless,
  footless,
  children
}) => (
  <>
    <SEO keywords={keywords} title={title} description={description} image={image} />
    {!navless && <Navbar />}
    <main>{children}</main>
    {!footless && <Footer />}
  </>
)

export default Layout
