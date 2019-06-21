// we need to use the navbar from https://mustofa.id/blog
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Icon from './widget/icon'
import Category from './widget/category'

const Navbar = ({ backTo = '/', title, subtitle, categories, type }) => {
  const [menuShown, setMenuShown] = useState(false)

  function toggleMenu () {
    setMenuShown(!menuShown)
  }

  return (
    <>
      <Helmet bodyAttributes={{ className: 'has-navbar-fixed-top' }} />
      <nav
        className='navbar is-fixed-top is-white has-bg-shadow'
        role='navigation'
        aria-label='main navigation'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link className='navbar-item' to={backTo}>
              <Icon size='18' name='arrow-left' />
            </Link>
            <div className='navbar-item'>
              <span>
                {title}
                {subtitle && (
                  <span className='has-text-grey'>&nbsp;{subtitle}</span>
                )}
              </span>
            </div>
            {/* Burger button */}
            <div
              onClick={toggleMenu}
              role='button'
              className={`navbar-burger burger${menuShown ? ' is-active' : ''}`}
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
            {/* Navbar menu end */}
            <div className='navbar-end'>
              {categories && <Category type={type} categories={categories} />}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
