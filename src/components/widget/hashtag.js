import React from 'react'
import { Link } from 'gatsby'
import { queryType } from '../../shared/util'

const Hashtag = ({ className, type, tags }) => (
  <>
    {tags.map((e, i) => (
      <Link
        className={className}
        style={{ paddingRight: '5px' }}
        key={`${i}--${e}`}
        to={`/${type}?${queryType.tag}=${e.toLowerCase()}`}>{`#${e} `}</Link>
    ))}
  </>
)

export default Hashtag
