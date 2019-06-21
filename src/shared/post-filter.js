export const queryType = {
  tag: 'tag',
  category: 'category'
}

export let queryWithType

/**
 * Filtering items by url search params.
 * The number of search parameters matches the value of queryType.
 * For now only support queries with one search key eg. site.com/blog?tag=palette */
export function filter (items, location) {
  const { search } = location

  // Reset queryWithType
  queryWithType = undefined

  // Search is null or empty will return all items
  if (!search || !search.trim()) return items

  // Get search params from url. eg: site.com/blog `?tag=palette&tag=colors`
  const params = new URLSearchParams(search)

  // Get first key in search params. eg from sample above `tag`
  const type = params.keys().next().value

  // Get value of search params given type. eg from sample above `palette`
  const query = params.get(type)

  // Assign query with type for UI purposes. 'tag' -> '#palette' & 'category' -> @opini
  queryWithType = type === queryType.tag ? `#${query}` : `@${query}`

  if (query) {
    // Filtering items by search key or type
    return items.filter(e => {
      if (type === queryType.tag) {
        // Return all item with query includes in item tags
        return inic(e.node.frontmatter.tags, query)
      } else if (type === queryType.category) {
        // Return all item with query equal with category
        return eqic(e.node.frontmatter.category, query)
      } else {
        // If search key not match with any queryType values it will return all items
        return true
      }
    })
  }

  // No query will return all items
  return items
}

// Check array is contains value with ignoring case (includesIgnoreCase)
const inic = (arr, val) => {
  const regex = new RegExp(arr.join('|'), 'i')
  return regex.test(val)
}

// Check for equality with ignoring case (equalIgnoreCase)
const eqic = (a, b) => a.toUpperCase() === b.toUpperCase()
