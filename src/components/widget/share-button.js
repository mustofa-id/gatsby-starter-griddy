import React from 'react'
import Icon from './icon'

const links = {
  facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
  twitter: 'https://twitter.com/share?url=',
  telegram: 'https://telegram.me/share/?url=',
  whatsapp: 'https://api.whatsapp.com/send?text=',
  pinterest: 'https://pinterest.com/pin/create/button/?url='
}

export const ShareButtons = ({ url }) => (
  <div className='navbar-end'>
    <div className='navbar-item has-dropdown is-hoverable'>
      <p className='navbar-link'>Share</p>
      <div className='navbar-dropdown is-right'>
        {Object.keys(links).map((k, i) => (
          <a className='navbar-item' key={`${k}--${i}`} href={links[k] + url}>
            <span className='icon'>
              <Icon name={k} size='16' />
            </span>
            <span>{k.replace(/./, x => x.toUpperCase())}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
)
