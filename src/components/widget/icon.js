import React from 'react'
import feather from '../../assets/icons/feather.svg'

const Icon = ({ name, size, width, height, color, style, strokeWidth }) => (
  <svg style={style}
    width={size || width}
    height={size || height}
    fill='none'
    stroke={color || 'currentColor'}
    strokeWidth={strokeWidth || '2'}
    strokeLinecap='round'
    strokeLinejoin='round'>
    <use xlinkHref={`${feather}#${name}`} />
  </svg>
)

export default Icon
