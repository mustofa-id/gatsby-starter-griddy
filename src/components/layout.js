import React from 'react'
import SEO from './seo'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({
  title,
  description,
  children,
  keywords,
  navless,
  footless
}) => (
  <>
    <SEO keywords={keywords} title={title} description={description} />
    {!navless && <Navbar />}
    <main>{children}</main>
    {!footless && <Footer />}
  </>
)

export default Layout
