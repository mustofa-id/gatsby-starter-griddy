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
              <h1 className='title is-3'>
                {/* config site title */}
                Tittle is too long
              </h1>
              <h2 className='subtitle is-6' style={{ marginBottom: '0.8rem' }}>
                {/* config description */}
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </h2>
              <span className='button is-static is-small is-unset-border'>
                {/* config location */}
                Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </Layout>
)

export default IndexPage
