import React from 'react'
import IconButton from './icon-button'

const links = {
  facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
  twitter: 'https://twitter.com/share?url=',
  telegram: 'https://telegram.me/share/?url=',
  whatsapp: 'https://api.whatsapp.com/send?text=',
  pinterest: 'https://pinterest.com/pin/create/button/?url='
}

export const ShareButton = ({ type, url, ...wrapperProps }) => (
  <IconButton icon={type} to={links[type] + url} {...wrapperProps} />
)

export const ShareButtons = ({ url, ...wrapperProps }) => (
  <>
    {Object.keys(links).map((k, i) => (
      <ShareButton key={`${k}--${i}`} type={k} url={url} {...wrapperProps} />
    ))}
  </>
)
