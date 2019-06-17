import React from 'react'
import feather from 'feather-icons/dist/feather-sprite.svg'

const Icon = ({ name, size, width, height, color, style }) => (
  <svg style={style}
    width={size || width}
    height={size || height}
    fill='none'
    stroke={color || 'currentColor'}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <use xlinkHref={`${feather}#${name}`} />
  </svg>
)

export default Icon
