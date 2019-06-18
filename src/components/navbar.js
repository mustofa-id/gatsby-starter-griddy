import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql, StaticQuery } from 'gatsby'
import IconButton from './widget/icon-button'
import logo from '../assets/images/gatsby-icon.png'

const Navbar = props => {
  const [menuShown, setMenuShown] = useState(false)

  function toggleMenu () {
    setMenuShown(!menuShown)
  }

  const elements = data => {
    const meta = data.site.siteMetadata
    return (
      <>
        <Helmet bodyAttributes={{ className: 'has-navbar-fixed-top' }} />
        <nav
          className='navbar is-fixed-top is-white has-bg-shadow'
          role='navigation'
          aria-label='main navigation'>
          <div className='container'>
            <div className='navbar-brand'>
              <Link className='navbar-item' to='/'>
                <img src={logo} height='28' alt='logo' />
              </Link>
              <div
                onClick={toggleMenu}
                role='button'
                className={`navbar-burger burger${
                  menuShown ? ' is-active' : ''
                }`}
                aria-label='menu'
                aria-expanded='false'
                data-target='griddy-nav-menu'>
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </div>
            </div>
            <div
              id='griddy-nav-menu'
              className={`navbar-menu${menuShown ? ' is-active' : ''}`}>
              <div className='navbar-start'>
                {meta.start.map(item => (
                  <Link key={item.name} className='navbar-item' to={item.href}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='navbar-end'>
                <div className='navbar-item'>
                  <div className='field is-grouped'>
                    <p className='control'>
                      {meta.end.map(item => (
                        <IconButton
                          key={item.name}
                          to={item.href}
                          buttonClass='is-white'
                          icon={item.icon}
                          external={external(item.href)}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
  return <StaticQuery query={query} render={elements} />
}

const query = graphql`
  query {
    site {
      siteMetadata {
        start: menuItemsStart {
          name
          href
        }
        end: menuItemsEnd {
          name
          href
          icon
        }
      }
    }
  }
`

const external = url => url.includes('http') || url.includes('mailto')

export default Navbar
