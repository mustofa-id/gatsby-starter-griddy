import React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <div className='hero is-fullheight is-light'>
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <h1 className='title'>Error 404</h1>
        <h2 className='subtitle'>
          The page you're looking is doesn't exist or has been moved.
          <br />
          Please go back to{' '}
          <Link to='/'>
            <strong>Home</strong>.
          </Link>
        </h2>
      </div>
    </div>
  </div>
)

export default NotFoundPage
