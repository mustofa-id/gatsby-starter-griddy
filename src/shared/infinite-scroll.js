import { useEffect, useState } from 'react'

export default function infiniteScroll (callback) {
  const [isLoading, setLoading] = useState(false)
  const [isEnd, setEnd] = useState(false)

  useEffect(() => {
    const delay = 250
    window.addEventListener('scroll', throttle(handleScroll, delay))
    return () => window.removeEventListener('scroll', throttle(handleScroll, delay))
  }, [])

  useEffect(() => {
    if (!isLoading || isEnd) return
    callback()
  }, [isLoading, isEnd])

  function handleScroll () {
    const threshold = window.innerHeight / 2
    const heightTop = window.innerHeight + document.documentElement.scrollTop
    const offsetHeight = document.documentElement.offsetHeight - threshold
    if (heightTop <= offsetHeight || (isLoading || isEnd)) return
    setEnd(false)
    setLoading(true)
  }
  return [isLoading, setLoading, isEnd, setEnd]
}

function throttle (func, wait) {
  let time = Date.now()
  return function () {
    if ((time + wait - Date.now()) < 0) {
      func()
      time = Date.now()
    }
  }
}
