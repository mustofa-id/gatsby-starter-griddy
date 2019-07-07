import { useEffect, useState } from 'react'

export default function infiniteScroll (callback) {
  const [isLoading, setLoading] = useState(false)
  const [isEnd, setEnd] = useState(false)

  useEffect(() => {
    let ticking = false
    function scroll () {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scroll)
    return () => window.removeEventListener('scroll', scroll)
  }, [])

  useEffect(
    () => {
      if (!isLoading || isEnd) return
      callback()
    },
    [isLoading, isEnd]
  )

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
