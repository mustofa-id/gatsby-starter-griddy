import React from 'react'
import { graphql } from 'gatsby'
import Masonry from '../components/widget/masonry'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SEO from '../components/seo'

const masonryBreakpoint = {
  default: 4,
  1279: 3,
  850: 2,
  500: 1
}

const Friend = ({ data, location }) => {
  const { friends } = data.site.siteMetadata
  const title = 'Friends'

  // const engines = friends.map(f => f.siteEngine)
  //   .filter((v, i, e) => e.indexOf(v) === i)

  return (
    <>
      <SEO title={title} />
      <header>
        <Navbar title={title} >
          {/* <Category categories={engines} type='friend' /> */}
        </Navbar>
      </header>
      <main className='fade-in'>
        <article className='hero is-light'>
          <div className='hero-body' style={{ paddingBottom: '0' }}>
            <div className='container has-text-centered'>
              <Masonry breakpoint={masonryBreakpoint}>
                {friends.map((p, i) => (
                  <FriendItem
                    key={`${p.name}--${i}`}
                    name={p.name}
                    desc={p.description}
                    url={p.siteUrl}
                    avatar={p.avatar}
                    backdrop={p.backdrop}
                    engine={p.siteEngine}
                  />
                ))}
              </Masonry>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

const FriendItem = ({ name, desc, url, avatar, backdrop, engine }) => (
  <a href={url}>
    <div
      className='box is-paddingless has-rounded-corner has-bg-shadow has-hover-effect'
      style={{ marginBottom: '1rem' }}>
      <img style={{ borderRadius: '10px 10px 0 0' }} src={avatar} alt={name} />
      <div className='media-content' style={{ padding: '1rem' }}>
        <div className='content'>
          <p style={{ marginBottom: '0.5em' }}>
            <strong>{name}</strong>
          </p>
          <p className='is-size-6' style={{ marginBottom: '0.5em' }}>
            {desc}
          </p>
        </div>
      </div>
    </div>
  </a>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        friends {
          name
          siteUrl
          avatar
          backdrop
          description
          siteEngine
        }
      }
    }
  }
`

export default Friend
