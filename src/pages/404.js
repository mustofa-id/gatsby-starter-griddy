import React from 'react'
import IconButton from '../components/widget/icon-button'

const NotFoundPage = () => (
  <div className='hero is-fullheight is-light'>
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <h1 className='title is-2' style={{ paddingBottom: '0.2rem' }}>Error 404</h1>
        <h2 className='subtitle is-5'>
          "The page you're looking is doesn't exist or has been moved"
          <br />
          <div style={{ marginTop: '1rem' }}>
            <IconButton
              className='button is-dark'
              key={`Home`}
              icon={`home`}
              text={'Back to Home'}
              to={`/`}
            />
          </div>
        </h2>
      </div>
    </div>
  </div>
)

export default NotFoundPage
