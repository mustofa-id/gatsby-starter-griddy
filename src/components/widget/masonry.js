import React, { useState, useEffect } from 'react'

const Masonry = ({ column, children, breakpoint }) => {
  if (!children) return null

  const [columnCount, setColumnCount] = useState(breakpoint.default)

  useEffect(() => {
    calculateColumnCount()
    if (window) window.addEventListener('resize', calculateColumnCount)
    return () => {
      if (window) {
        window.removeEventListener('resize', calculateColumnCount)
      }
    }
  })

  function calculateColumnCount () {
    const width = (window && window.innerWidth) || Infinity

    let matchedBreakpoint = Infinity
    let columns = breakpoint.default

    for (let bp in breakpoint) {
      const optBreakpoint = parseInt(bp)
      const isCurrentBreakpoint = optBreakpoint > 0 && width <= optBreakpoint

      if (isCurrentBreakpoint && optBreakpoint < matchedBreakpoint) {
        matchedBreakpoint = optBreakpoint
        columns = breakpoint[bp]
      }
    }

    columns = Math.max(1, parseInt(columns) || 1)

    if (columnCount !== columns) {
      setColumnCount(columns)
    }
  }

  const render = () => {
    const items = new Array(columnCount)
    for (let i = 0; i < children.length; i++) {
      const columnIndex = i % columnCount
      if (!items[columnIndex]) {
        items[columnIndex] = []
      }
      items[columnIndex].push(children[i])
    }
    const width = `${100 / items.length}%`
    return items.map((e, i) => {
      return (
        <div
          key={`item-key--${i}`}
          className='is-masonry-column'
          style={{ width }}
          {...column}>
          {e}
        </div>
      )
    })
  }

  return <div className='is-masonry is-centered'>{render()}</div>
}

export default Masonry
