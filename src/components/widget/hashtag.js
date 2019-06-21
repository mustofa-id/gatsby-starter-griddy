import React from 'react'
import { Link } from 'gatsby'
import { queryType } from '../../shared/post-filter'

const Hashtag = ({ className, type, tags }) => (
  <>
    {tags.map((e, i) => (
      <Link
        className={className}
        key={`${i}--${e}`}
        to={`/${type}?${queryType.tag}=${e.toLowerCase()}`}>{`#${e} `}</Link>
    ))}
  </>
)

export default Hashtag
