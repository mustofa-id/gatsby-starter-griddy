import React, { useEffect } from 'react'
import Valine from 'valine'

const config = {
  el: '#vcomment',
  // Id only for development. Get it from https://leancloud.cn/dashboard/applist.html#/newapp
  appId: '6nMVD4sy0OMluE4q02ufCdni-MdYXbMMI',
  // Key only for development. Get it from https://leancloud.cn/dashboard/applist.html#/newapp
  appKey: 'JnwWEb9YBQ8ElvdbdpJRk7wx',
  lang: 'en',
  placeholder: 'Leave comment here...',
  verify: true,
  avatar: 'mp'
  // Other config https://valine.js.org/en/configuration.html
}

const ValineComment = props => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Setup leancloud
      window.AV = require('leancloud-storage')
      // Setup valine
      const valine = Valine()
      valine.init(config)
    }
  }, [])

  return <div id={config.el.substring(1)} />
}

export default ValineComment
