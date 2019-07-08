import React from 'react'
import { graphql } from 'gatsby'
import Masonry from '../components/widget/masonry'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SEO from '../components/seo'

const masonryBreakpoint = {
  default: 3,
  1279: 3,
  850: 2,
  500: 1
}

const Friends = ({ data, location }) => {
  const { friends } = data.site.siteMetadata
  const title = 'Friends'

  // const engines = friends.map(f => f.siteEngine)
  //   .filter((v, i, e) => e.indexOf(v) === i)

  return (
    <>
      <SEO
        title={title}
        description='Screenshot of SSG sample of my friends on the community'
      />
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
                    screenshot={p.screenshot}
                    profilepic={p.profilepic}
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

const FriendItem = ({ name, desc, url, screenshot, profilepic, engine }) => (

  <div className='box has-bg-shadow has-rounded-corner is-paddingless has-hover-effect'
    style={{ marginBottom: '1rem' }}>
    <figure className='image'>
      <img className='coverpic' src={screenshot} alt={name} />
    </figure>
    <div className='media padding-bottom-0'>
      <div className='media-left'>
        <figure className='image is-48x48'>
          <img style={{ borderRadius: '5px' }} src={profilepic} alt={name} />
        </figure>
      </div>
      <div className='media-content'>
        <p>
          <strong>{name}</strong>
        </p>
        <p style={{ fontSize: '14px' }}>
          <a href={url}>{url}</a>
        </p>
      </div>
    </div>
    <div className='media-content' style={{ padding: '1rem' }}>
      <div className='content'>
        <p>
          {desc}
        </p>
        <p className='is-size-7'>
          SSG: {engine}
        </p>
      </div>
    </div>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        friends {
          name
          siteUrl
          screenshot
          profilepic
          description
          siteEngine
        }
      }
    }
  }
`

export default Friends
