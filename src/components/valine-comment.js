import React, { useEffect } from 'react'

const ValineComment = ({ location, postId }) => {
  
  const config = {
    el: '#vcomment',
    // Id only for development. Get it from https://leancloud.cn/dashboard/applist.html#/newapp
    appId: '6nMVD4sy0OMluE4q02ufCdni-MdYXbMMI',
    // Key only for development. Get it from https://leancloud.cn/dashboard/applist.html#/newapp
    appKey: 'JnwWEb9YBQ8ElvdbdpJRk7wx',
    lang: 'en',
    placeholder: 'Leave comment here...',
    verify: true,
    avatar: 'mp',
    path: `${location.pathname}--${postId}`
    // Other config https://valine.js.org/en/configuration.html
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Setup leancloud
      window.AV = require('leancloud-storage')

      // Setup valine lazily because problem with window object
      // PS: Dinamyc import not allowed by standard js so we ignore this js file to be formated
      import('valine')
        .then(valine => {
          valine.default(config)
        })
        .catch(error => console.error(error))
    }
  }, [])

  return <div id={config.el.substring(1)} />
}

export default ValineComment
