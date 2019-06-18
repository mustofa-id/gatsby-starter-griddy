import React from 'react'
import Layout from '../components/layout'
import coverpic from '../assets/images/cover.jpg'
import profilpic from '../assets/images/profile.jpg'

const IndexPage = () => (
  <Layout>
    <article className='hero is-fullheight is-light'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='box has-bg-shadow coverbox has-rounded-corner'>
            <div className='media'>
              <figure className='image'>
                <img className='coverpic' src={coverpic} alt='Cover' />
              </figure>
            </div>
            <figure id='profile_pic' className='image is-128x128 has-image-centered'>
              <img className='is-rounded has-padding-4' src={profilpic} alt='Profile Picture' />
            </figure>
            <div className='profile_info'>
              <h1 className='title is-3' style={{ marginBottom: '1.9rem' }}>
                {/* config site title */}
                Aflasio
              </h1>
              <h2 className='subtitle is-6' style={{ marginBottom: '0.9rem' }}>
                {/* config description */}
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </h2>
              {/* button menu */}
              <div className='field buttons has-addons is-centered' style={{ marginTop: '0.8rem' }}>
                <a className='button'>
                  Gallery
                </a>
                <a className='button'>
                  Blog
                </a>
                <a className='button'>
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </Layout>
)

export default IndexPage
