import { useEffect, useState } from 'react'

export default function infiniteScroll (callback) {
  const [isLoading, setLoading] = useState(false)
  const [isEnd, setEnd] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isLoading || isEnd) return
    callback()
  }, [isLoading, isEnd])

  function handleScroll () {
    const heightTop = window.innerHeight + document.documentElement.scrollTop
    const offsetHeight = document.documentElement.offsetHeight
    if (heightTop !== offsetHeight || (isLoading || isEnd)) {
      return
    }
    setEnd(false)
    setLoading(true)
  }

  return [isLoading, setLoading, isEnd, setEnd]
}
