import React, { useEffect, useState, createRef } from 'react'
import elasticlunr from 'elasticlunr'
import { graphql, Link, navigate } from 'gatsby'
import Icon from '../components/widget/icon'
import { queryAdjustment, queryType } from '../shared/util'
import SEO from '../components/seo'

const elunr = elasticlunr(function () {
  this.addField('title')
  this.addField('date')
  this.addField('tags')
  this.addField('category')
  this.addField('body')
  this.setRef('id')
})

const searchConfig = {
  fields: {
    title: { boost: 1 },
    date: { boost: 1 },
    tags: { boost: 1 },
    category: { boost: 1 },
    body: { boost: 2, bool: 'AND' }
  },
  bool: 'OR',
  expand: true
}

const Search = ({ data, location }) => {
  const inputRef = createRef()
  const [result, setResult] = useState([])
  const [allowed, queryValue, type] = queryAdjustment(location)

  const { edges } = data.posts
  edges.forEach(e => {
    const { node } = e
    const doc = {
      id: node.id,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      tags: node.frontmatter.tags.join(' '),
      category: node.frontmatter.category,
      body: node.rawMarkdownBody
    }
    elunr.addDoc(doc)
  })

  useEffect(() => {
    if (allowed && type === queryType.search) {
      inputRef.current.value = queryValue
      perfomSearch(queryValue)
    }
  }, [])

  function handleSearch (e) {
    e.preventDefault()
    perfomSearch()
  }

  function perfomSearch () {
    const query = inputRef.current.value
    const searchResult = elunr.search(query, searchConfig)
    const { edges } = data.posts
    const filtered = edges.filter(e =>
      searchResult.map(r => r.ref).includes(e.node.id)
    )
    setResult(filtered)
    navigate(`${location.pathname}?${type}=${query}`)
  }

  return (
    <>
      <SEO title={`Search for "${queryValue}"`} />
      <main className='hero is-light'>
        <div className='container'>
          <div className='hero-body'>
            <div className='field'>
              <form
                onSubmit={handleSearch}
                className={`control has-icons-left`}>
                <input
                  ref={inputRef}
                  className='input is-rounded is-light'
                  type='search'
                  placeholder='Keyword...'
                  autoFocus
                />
                <span className='icon is-small is-left'>
                  <Icon size='16' name='search' />
                </span>
              </form>
            </div>
          </div>
        </div>
      </main>
      <article className='hero'>
        <div className='container'>
          <div className='hero-body'>
            <div className='column'>
              {result.map(e => (
                <ResultItem node={e.node} key={e.node.id} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

const ResultItem = ({ node }) => (
  <div className='colum box'>
    <p className='is-size-4'>
      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
    </p>
    <p className='is-size-7'>{node.frontmatter.date}</p>
    <p>{node.excerpt}</p>
  </div>
)

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          rawMarkdownBody
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
            tags
            category
          }
        }
      }
    }
  }
`

export default Search
