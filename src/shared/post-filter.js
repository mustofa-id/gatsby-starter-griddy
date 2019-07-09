import { inic, eqic, queryType, queryAdjustment } from './util'

export let queryWithType

/**
 * Filtering items by url search params.
 * The number of search parameters matches the value of queryType.
 * For now only support queries with one search key eg. site.com/blog?tag=palette */
export function filterPosts (items, location) {
  // Reset queryWithType
  queryWithType = undefined

  // Adjust the query
  const [allowed, query, type] = queryAdjustment(location)

  if (!allowed) return items

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
